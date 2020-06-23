import {
    fetchEndpoint,
    preparePublicKeyCredentials,
    preparePublicKeyOptions,
} from './common';

const useLogin = ({actionUrl = '/login', optionsUrl = '/login/options', headers = {}}) => {
    return async (data) => {
        const optionsResponse = await fetchEndpoint(data, optionsUrl);
        const json = await optionsResponse.json();
        const publicKey = preparePublicKeyOptions(json);
        const credentials = await navigator.credentials.get({publicKey});
        const publicKeyCredential = preparePublicKeyCredentials(credentials);
        const actionResponse = await fetchEndpoint(publicKeyCredential, actionUrl, headers);

        return await actionResponse.json();
    };
};

export default useLogin;
