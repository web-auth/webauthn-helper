Webauthn Helper
===============

This package contains helper functions to handle Webauthn registration and authentication.
It is primarily designed to be used with the Web-Auth Framework from Spomky-Labs.

# Installation

With Yarn:

```sh
yarn add @web-auth/webauthn-helper
```
# Usage

## Registration

```js
// Import the tool(s) ou need
import {useRegistration} from '@web-auth/webauthn-helper';

// We want to register new authenticators
const register = useRegistration({
    actionUrl: '/api/register',
    optionsUrl: '/api/register/options'
});

register({
    username: 'FOO4',
     displayName: 'baR'
})
    .then((response)=> console.log('Registration success'))
    .catch((error)=> console.log('Registration failure'))
;
```

## Authentication

```js
import {useLogin} from '@web-auth/webauthn-helper';

const login = useLogin({
    loginUrl: '/api/login',
    loginOptions: '/api/login/options'
});

login({
    username: 'FOO4'
})
    .then((response)=> console.log('Login success'))
    .catch((error)=> console.log('Login failure'))
;
```

## Additional Header Parameters

For both `useLogin` and `useRegistration` methods, you can add custom header parameters.

```js
import {useLogin} from '@web-auth/webauthn-helper';

const login = useLogin({
    loginUrl: '/api/login',
    actionHeader: {
        'X-TOKEN': 'Secured-TOKEN!!!'
    },
    loginOptions: '/api/login/options',
    optionsHeader: {
        'X-TOKEN': 'Secured-TOKEN!!!',
        'X-OTHER-PARAM': '1,2,3,4'
    }
});
```


# Support

I bring solutions to your problems and answer your questions.

If you really love that project, and the work I have done or if you want I prioritize your issues, then you can help me out for a couple of :beers: or more!

[Become a sponsor](https://github.com/sponsors/Spomky)

Or

[![Become a Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/FlorentMorselli)

# Contributing

Requests for new features, bug fixed and all other ideas to make this framework useful are welcome.
If you feel comfortable writing code, you could try to fix [opened issues where help is wanted](https://github.com/web-auth/webauthn-framework/issues?q=label%3A%22help+wanted%22) or [those that are easy to fix](https://github.com/web-auth/webauthn-framework/labels/easy-pick).

Do not forget to [follow these best practices](.github/CONTRIBUTING.md).

**If you think you have found a security issue, DO NOT open an issue**. [You MUST submit your issue here](https://gitter.im/Spomky/).

# Licence

This software is release under [MIT licence](LICENSE).
