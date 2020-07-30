// Predefined fetch function
export const fetchEndpoint = (data, url, header) => {
  return fetch(
      url,
      {
        method: 'POST',
        credentials: 'same-origin',
        redirect: 'error',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...header
        },
        body: JSON.stringify(data),
      }
  );
}

// Decodes a Base64Url string
const base64UrlDecode = (input) => {
  input = input
      .replace(/-/g, '+')
      .replace(/_/g, '/');

  const pad = input.length % 4;
  if (pad) {
    if (pad === 1) {
      throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
    }
    input += new Array(5-pad).join('=');
  }

  return window.atob(input);
};

// Converts an array of bytes into a Base64Url string
const arrayToBase64String = (a) => btoa(String.fromCharCode(...a));

// Prepares the public key options object returned by the Webauthn Framework
export const preparePublicKeyOptions = publicKey => {
  //Convert challenge from Base64Url string to Uint8Array
  publicKey.challenge = Uint8Array.from(
      base64UrlDecode(publicKey.challenge),
      c => c.charCodeAt(0)
  );

  //Convert the user ID from Base64 string to Uint8Array
  if (publicKey.user !== undefined) {
    publicKey.user = {
      ...publicKey.user,
      id: Uint8Array.from(
          window.atob(publicKey.user.id),
          c => c.charCodeAt(0)
      ),
    };
  }

  //If excludeCredentials is defined, we convert all IDs to Uint8Array
  if (publicKey.excludeCredentials !== undefined) {
    publicKey.excludeCredentials = publicKey.excludeCredentials.map(
        data => {
          return {
            ...data,
            id: Uint8Array.from(
                base64UrlDecode(data.id),
                c => c.charCodeAt(0)
            ),
          };
        }
    );
  }

  if (publicKey.allowCredentials !== undefined) {
    publicKey.allowCredentials = publicKey.allowCredentials.map(
        data => {
          return {
            ...data,
            id: Uint8Array.from(
                base64UrlDecode(data.id),
                c => c.charCodeAt(0)
            ),
          };
        }
    );
  }

  return publicKey;
};

// Prepares the public key credentials object returned by the authenticator
export const preparePublicKeyCredentials = data => {
  const publicKeyCredential = {
    id: data.id,
    type: data.type,
    rawId: arrayToBase64String(new Uint8Array(data.rawId)),
    response: {
      clientDataJSON: arrayToBase64String(
          new Uint8Array(data.response.clientDataJSON)
      ),
    },
  };

  if (data.response.attestationObject !== undefined) {
    publicKeyCredential.response.attestationObject = arrayToBase64String(
        new Uint8Array(data.response.attestationObject)
    );
  }

  if (data.response.authenticatorData !== undefined) {
    publicKeyCredential.response.authenticatorData = arrayToBase64String(
        new Uint8Array(data.response.authenticatorData)
    );
  }

  if (data.response.signature !== undefined) {
    publicKeyCredential.response.signature = arrayToBase64String(
        new Uint8Array(data.response.signature)
    );
  }

  if (data.response.userHandle !== undefined) {
    publicKeyCredential.response.userHandle = arrayToBase64String(
        new Uint8Array(data.response.userHandle)
    );
  }

  return publicKeyCredential;
};
