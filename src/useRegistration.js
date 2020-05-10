import {
  fetchEndpoint,
  preparePublicKeyCredentials,
  preparePublicKeyOptions,
} from './common';

const useRegistration = ({onSuccess, onFailure, registerUrl = '/register', registerOptions = '/register/options'}) => {
  return (data) => {
    fetchEndpoint(data, registerOptions)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return preparePublicKeyOptions(json)
      })
      .then(publicKey => {
        navigator.credentials
          .create({publicKey})
          .then((data) => {
            const publicKeyCredential = preparePublicKeyCredentials(data);
            console.log(publicKeyCredential);
            fetchEndpoint(publicKeyCredential, registerUrl)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    onSuccess(json);
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

export default useRegistration;
