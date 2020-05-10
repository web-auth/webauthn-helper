import {
  fetchEndpoint,
  preparePublicKeyCredentials,
  preparePublicKeyOptions,
} from './common';

const useLogin = ({onSuccess, onFailure, loginUrl = '/login', loginOptions = '/login/options'}) => {
  return (data) => {
    fetchEndpoint(data, loginOptions)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return preparePublicKeyOptions(json)
      })
      .then(publicKey => {
        navigator.credentials
          .get({publicKey})
          .then((data) => {
            const publicKeyCredential = preparePublicKeyCredentials(data);
            fetchEndpoint(publicKeyCredential, loginUrl)
              .then((response) => {
                onSuccess(response);
              })
              .catch((err) => {
                onFailure(err);
              })
            ;
          })
          .catch((err) => {
            onFailure(err);
          })
      })
      .catch(err => onFailure(err))
  };
}

export default useLogin;
