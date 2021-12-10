import {
    fetchEndpoint,
    preparePublicKeyCredentials,
    preparePublicKeyOptions,
} from './common';

const useLogin = ({actionUrl = '/login', actionHeader = {}, optionsUrl = '/login/options', optionsHeader = {}, afterOptionsSend=null}) => {
    return async (data) => {
        const optionsResponse = await fetchEndpoint(data, optionsUrl, optionsHeader);
        const json = await optionsResponse.json();
        if (! optionsResponse.ok) {
            throw json;
        }
        const publicKey = preparePublicKeyOptions(json);
        const credentials = await navigator.credentials.get({publicKey});
        
        //callback before verifying authentication
        if(typeof(afterOptionsSend)=='function'){afterOptionsSend();}
   
        const publicKeyCredential = preparePublicKeyCredentials(credentials);
        const actionResponse = await fetchEndpoint(publicKeyCredential, actionUrl, actionHeader);
        const responseBody = await actionResponse.text();
        if (! actionResponse.ok) {
            throw responseBody;
        }

        return responseBody !== '' ? JSON.parse(responseBody) : responseBody;
    };
};

export default useLogin;
