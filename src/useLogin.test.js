import useLogin from "./useLogin";

describe('Login', () => {
    global.navigator.credentials = {
        get: jest.fn(() => Promise.resolve({
            "rawId": "AZD7huwZVx7aW1efRa6Uq3JTQNorj3qA9yrLINXEcgvCQYtWiSQa1eOIVrXfCmip6MzP8KaITOvRLjy3TUHO7/c",
            "id": "AZD7huwZVx7aW1efRa6Uq3JTQNorj3qA9yrLINXEcgvCQYtWiSQa1eOIVrXfCmip6MzP8KaITOvRLjy3TUHO7/c",
            "response": {
                "clientDataJSON": "eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiVGY2NWJTNkQ1dGVtaDJCd3ZwdHFnQlBiMjVpWkRSeGp3QzVhbnM5MUlJSkRyY3JPcG5XVEs0TFZnRmplVVY0R0RNZTQ0dzhTSTVOc1pzc0lYVFV2RGciLCJvcmlnaW4iOiJodHRwczpcL1wvd2ViYXV0aG4ub3JnIiwiYW5kcm9pZFBhY2thZ2VOYW1lIjoiY29tLmFuZHJvaWQuY2hyb21lIn0",
                "attestationObject": "o2NmbXRrYW5kcm9pZC1rZXlnYXR0U3RtdKNjYWxnJmNzaWdYRjBEAiAsp6jPtimcSgc-fgIsVwgqRsZX6eU7KKbkVGWa0CRJlgIgH5yuf_laPyNy4PlS6e8ZHjs57iztxGiTqO7G91sdlWBjeDVjg1kCzjCCAsowggJwoAMCAQICAQEwCgYIKoZIzj0EAwIwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRUwEwYDVQQKDAxHb29nbGUsIEluYy4xEDAOBgNVBAsMB0FuZHJvaWQxOzA5BgNVBAMMMkFuZHJvaWQgS2V5c3RvcmUgU29mdHdhcmUgQXR0ZXN0YXRpb24gSW50ZXJtZWRpYXRlMB4XDTE4MTIwMjA5MTAyNVoXDTI4MTIwMjA5MTAyNVowHzEdMBsGA1UEAwwUQW5kcm9pZCBLZXlzdG9yZSBLZXkwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQ4SaIP3ibDSwCIORpYJ3g9_5OICxZUCIqt-vV6JZVJoXQ8S1JFzyaFz5EFQ2fNT6-5SE5wWTZRAR_A3M52IcaPo4IBMTCCAS0wCwYDVR0PBAQDAgeAMIH8BgorBgEEAdZ5AgERBIHtMIHqAgECCgEAAgEBCgEBBCAqQ4LXu9idi1vfF3LP7MoUOSSHuf1XHy63K9-X3gbUtgQAMIGCv4MQCAIGAWduLuFwv4MRCAIGAbDqja1wv4MSCAIGAbDqja1wv4U9CAIGAWduLt_ov4VFTgRMMEoxJDAiBB1jb20uZ29vZ2xlLmF0dGVzdGF0aW9uZXhhbXBsZQIBATEiBCBa0F7CIcj4OiJhJ97FV1AMPldLxgElqdwhywvkoAZglTAzoQUxAwIBAqIDAgEDowQCAgEApQUxAwIBBKoDAgEBv4N4AwIBF7-DeQMCAR6_hT4DAgEAMB8GA1UdIwQYMBaAFD_8rNYasTqegSC41SUcxWW7HpGpMAoGCCqGSM49BAMCA0gAMEUCIGd3OQiTgFX9Y07kE-qvwh2Kx6lEG9-Xr2ORT5s7AK_-AiEAucDIlFjCUo4rJfqIxNY93HXhvID7lNzGIolS0E-BJBhZAnwwggJ4MIICHqADAgECAgIQATAKBggqhkjOPQQDAjCBmDELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDU1vdW50YWluIFZpZXcxFTATBgNVBAoMDEdvb2dsZSwgSW5jLjEQMA4GA1UECwwHQW5kcm9pZDEzMDEGA1UEAwwqQW5kcm9pZCBLZXlzdG9yZSBTb2Z0d2FyZSBBdHRlc3RhdGlvbiBSb290MB4XDTE2MDExMTAwNDYwOVoXDTI2MDEwODAwNDYwOVowgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRUwEwYDVQQKDAxHb29nbGUsIEluYy4xEDAOBgNVBAsMB0FuZHJvaWQxOzA5BgNVBAMMMkFuZHJvaWQgS2V5c3RvcmUgU29mdHdhcmUgQXR0ZXN0YXRpb24gSW50ZXJtZWRpYXRlMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE6555-EJjWazLKpFMiYbMcK2QZpOCqXMmE_6sy_ghJ0whdJdKKv6luU1_ZtTgZRBmNbxTt6CjpnFYPts-Ea4QFKNmMGQwHQYDVR0OBBYEFD_8rNYasTqegSC41SUcxWW7HpGpMB8GA1UdIwQYMBaAFMit6XdMRcOjzw0WEOR5QzohWjDPMBIGA1UdEwEB_wQIMAYBAf8CAQAwDgYDVR0PAQH_BAQDAgKEMAoGCCqGSM49BAMCA0gAMEUCIEuKm3vugrzAM4euL8CJmLTdw42rJypFn2kMx8OS1A-OAiEA7toBXbb0MunUhDtiTJQE7zp8zL1e-yK75_65dz9ZP_tZAo8wggKLMIICMqADAgECAgkAogWe0Q5DW1cwCgYIKoZIzj0EAwIwgZgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQHDA1Nb3VudGFpbiBWaWV3MRUwEwYDVQQKDAxHb29nbGUsIEluYy4xEDAOBgNVBAsMB0FuZHJvaWQxMzAxBgNVBAMMKkFuZHJvaWQgS2V5c3RvcmUgU29mdHdhcmUgQXR0ZXN0YXRpb24gUm9vdDAeFw0xNjAxMTEwMDQzNTBaFw0zNjAxMDYwMDQzNTBaMIGYMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNTW91bnRhaW4gVmlldzEVMBMGA1UECgwMR29vZ2xlLCBJbmMuMRAwDgYDVQQLDAdBbmRyb2lkMTMwMQYDVQQDDCpBbmRyb2lkIEtleXN0b3JlIFNvZnR3YXJlIEF0dGVzdGF0aW9uIFJvb3QwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAATuXV7H4cDbbQOmfua2G-xNal1qaC4P_39JDn13H0Qibb2xr_oWy8etxXfSVpyqt7AtVAFdPkMrKo7XTuxIdUGko2MwYTAdBgNVHQ4EFgQUyK3pd0xFw6PPDRYQ5HlDOiFaMM8wHwYDVR0jBBgwFoAUyK3pd0xFw6PPDRYQ5HlDOiFaMM8wDwYDVR0TAQH_BAUwAwEB_zAOBgNVHQ8BAf8EBAMCAoQwCgYIKoZIzj0EAwIDRwAwRAIgNSGj74s0Rh6c1WDzHViJIGrco2VB9g2ezooZjGZIYHsCIE0L81HZMHx9W9o1NB2oRxtjpYVlPK1PJKfnTa9BffG_aGF1dGhEYXRhWMWVaQiPHs7jIylUA129ENfK45EwWidRtVm7j9fLsim91EUAAAAAKPN9K5K4QcSwKoYM73zANABBAVUvAmX241vMKYd7ZBdmkNWaYcNYhoSZCJjFRGmROb6I4ygQUVmH6k9IMwcbZGeAQ4v4WMNphORudwje5h7ty9ClAQIDJiABIVggOEmiD94mw0sAiDkaWCd4Pf-TiAsWVAiKrfr1eiWVSaEiWCB0PEtSRc8mhc-RBUNnzU-vuUhOcFk2UQEfwNzOdiHGjw"
            },
            "type": "public-key"
        }))
    };
    global.fetch = jest.fn(() => {
            return Promise.resolve({
                ok: true,
                text: () => Promise.resolve('{"status":"ok","errorMessage":""}'),
                json: () => Promise.resolve({
                    "status":"ok",
                    "errorMessage":"",
                    "rp":{
                        "name":"Webauthn Demo",
                        "id":"webauthn.spomky-labs.com"
                    },
                    "pubKeyCredParams":[
                        {"type":"public-key","alg":-8},
                        {"type":"public-key","alg":-7},
                        {"type":"public-key","alg":-43},
                        {"type":"public-key","alg":-35},
                        {"type":"public-key","alg":-36},
                        {"type":"public-key","alg":-257},
                        {"type":"public-key","alg":-258},
                        {"type":"public-key","alg":-259},
                        {"type":"public-key","alg":-37},
                        {"type":"public-key","alg":-38},
                        {"type":"public-key","alg":-39}
                    ],
                    "challenge":"KhWQ12Gltp92RModoTPgDqpgXCvR73JXKozijHIfwHE",
                    "attestation":"direct",
                    "user":{
                        "name":"hw1BfGxhRSKwTOAIx39K",
                        "id":"NzExYmI2ZTItYmU3My00YTcyLWE1MDUtYTQzYWE3ZTUyYzgw",
                        "displayName":"Leona Grayson"
                    },
                    "authenticatorSelection":{
                        "requireResidentKey":false,
                        "userVerification":"preferred"
                    },
                    "timeout":60000
                }),
            })
        }
    );

    beforeEach(() => {
        fetch.mockClear();
    });
    const login = useLogin({
        actionUrl: '/login',
        optionsUrl: '/login/options'
    });

    it('should log me in when the assertion is valid', () => {
        expect(login({username: 'foo'})).resolves.toEqual({"status":"ok","errorMessage":""})
    })
});
