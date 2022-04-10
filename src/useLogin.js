import {
    fetchEndpoint,
    preparePublicKeyCredentials,
    preparePublicKeyOptions,
} from './common';

const useLogin = ({actionUrl = '/login', actionHeader = {}, optionsUrl = '/login/options', optionsHeader = {}}) => {
    return async (data) => {
        const optionsResponse = await fetchEndpoint(data, optionsUrl, optionsHeader);
        const json = await optionsResponse.json();
        const publicKey = preparePublicKeyOptions(json);
        const credentials = await navigator.credentials.get({publicKey});
        const publicKeyCredential = preparePublicKeyCredentials(credentials);
        const actionResponse = await fetchEndpoint(publicKeyCredential, actionUrl, actionHeader);
        if (! actionResponse.ok) {
            throw actionResponse;
        }
        const responseBody = await actionResponse.text();

        return responseBody !== '' ? JSON.parse(responseBody) : responseBody;
    };
};

export default useLogin;
