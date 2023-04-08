
## [0.2.0](https://github.com/norviah/watch-together/compare/v0.1.0...v0.2.0) (2023-04-08)

- Implement Authentication

### Features

* **backend/controllers:** hash passwords when creating a user ([63b733e](https://github.com/norviah/watch-together/commit/63b733e5526f3dbeb427f03eda9ab41ba94c1f5e))
* **backend/controllers:** implement the user/signup endpoint ([79143c1](https://github.com/norviah/watch-together/commit/79143c109dde87d5ae0e72d9b19ec903650e0d43))
* **backend/controllers:** log when a user has been created ([19b6f2d](https://github.com/norviah/watch-together/commit/19b6f2dd3f487ba438dcc9a2c22aacc03dc52a23))
* **backend/docs:** add more metadata information about the api documentation ([94b11a2](https://github.com/norviah/watch-together/commit/94b11a21b1567f0abb078310515fcd0f8fdbc3cd))
* **backend/prisma:** implement the user model ([9d5cf12](https://github.com/norviah/watch-together/commit/9d5cf120c80801d8e3bb73080e3946caca5c68bd))
* **backend:** add authentication ([35386b5](https://github.com/norviah/watch-together/commit/35386b522f923281dad086808e90302ffb582455))
* **backend:** implement CORS ([2d85888](https://github.com/norviah/watch-together/commit/2d85888c8bb8bd2d8d81cc31809f6c0ae8f4dec0))
* **backend:** move the backend within the next application ([ae90eb1](https://github.com/norviah/watch-together/commit/ae90eb146e28cf284d7717332593ef23bdac27e0))
* **backend:** update database to know how a user created an account ([569f197](https://github.com/norviah/watch-together/commit/569f197cbd9e6d8c3fa2752135b75bd590650d8b))
* **frontend/components/_app:** only change the theme if it differs from the active theme ([f58b857](https://github.com/norviah/watch-together/commit/f58b85787a1ec64cf25f4daa323b67580819f13b))
* **frontend/components/UserMenu:** redirect back to the same page when the signin/signout button is clicked ([a1ed027](https://github.com/norviah/watch-together/commit/a1ed0270db48a8084daf5c4a35f22221b5c2e916))
* **frontend/structs/API:** implement a method to handle calling and notifying a user for an api request ([93f3668](https://github.com/norviah/watch-together/commit/93f3668a2bfcade3f9207ea033b4bd2f42bf8c8f))
* **frontend:** add a home button in the signin and signup pages ([a3096e6](https://github.com/norviah/watch-together/commit/a3096e6f2626955b8ee50d21276d5186b05c3486))
* **frontend:** add a link component that combines material ui and next ([5c18f03](https://github.com/norviah/watch-together/commit/5c18f03bc260bce861c9bd1f5a6a6fabe830bc9d))
* **frontend:** add a page dedicated page for a 404 error ([9ff9932](https://github.com/norviah/watch-together/commit/9ff9932a4dfb5357a3d3e1594a83fb329593755d))
* **frontend:** add a utility function to capitalize a string ([dc1d637](https://github.com/norviah/watch-together/commit/dc1d63744d842d29a7a041b0a01b690068a12e7a))
* **frontend:** add favicons ([35afb31](https://github.com/norviah/watch-together/commit/35afb3140df3f280369a061fe304ce95ece3709e))
* **frontend:** edit the _error page to reflect a generic error ([8d0fe0c](https://github.com/norviah/watch-together/commit/8d0fe0c368ad66ba2126aeb68e910c8a51671051))
* **frontend:** implement a custom 404 page ([be254b3](https://github.com/norviah/watch-together/commit/be254b340b2513ca8cbc13e3a5b66eed2fdc60be))
* **frontend:** implement a state system within the signup/signin page ([6a24c80](https://github.com/norviah/watch-together/commit/6a24c800d74e41a46a9716bf4167c5bcbb22b974))
* **frontend:** implement a theme switcher ([e05c13b](https://github.com/norviah/watch-together/commit/e05c13b0619aa1806599875797884c90e6b6d7f7))
* **frontend:** implement authentication ([7e811cd](https://github.com/norviah/watch-together/commit/7e811cd87e6f825c0f52fbeae6e7817d5e195643))
* **frontend:** implement the base structure for the application ([aabca37](https://github.com/norviah/watch-together/commit/aabca37093d6a0df13cbb4e2d2ad0fe0190766e3))
* **frontend:** implement themes ([1fe990d](https://github.com/norviah/watch-together/commit/1fe990d4660b9e7306da78e71dd14955a9438aed))
* **frontend:** make the default theme dark mode ([cf1ec42](https://github.com/norviah/watch-together/commit/cf1ec42a84de1bde8702008a8e094e17c39096c0))
* **frontend:** move the head tag to the _app component to dynamically set the app's theme ([a77df32](https://github.com/norviah/watch-together/commit/a77df32fe1597203b72dbc6b01dc5b29f62e6867))
* **frontend:** only support google for authentication ([e171c4e](https://github.com/norviah/watch-together/commit/e171c4e6a476bc8a625de735cb89783eb5035fb6))
* **frontend:** opt for next links when specifying links ([e425bf5](https://github.com/norviah/watch-together/commit/e425bf5f8a93d6f6b1791548d3f5ba6f49b3b86d))
* **frontend:** redirect the user to the home page if they attempt to visit the signup page while signed-in ([3faa8a2](https://github.com/norviah/watch-together/commit/3faa8a2cf9d8431385788d2ba54cafcf77191593))
* **frontend:** redirect to the homepage if the signin page is visited while signed in ([7b994c0](https://github.com/norviah/watch-together/commit/7b994c0704a014d55fc7775f906df3458e6e037f))
* **frontend:** redirect to the specified callback after a user has created an account ([2787928](https://github.com/norviah/watch-together/commit/2787928c5a6bca27c6d0c4b16b3aa89a0f4e8fae))
* **frontend:** set ids for toast notifications to prevent duplicates ([1ccae65](https://github.com/norviah/watch-together/commit/1ccae651fecfb221b4aeea181e97dfda38dd0c81))
* implement authentication ([83f04fe](https://github.com/norviah/watch-together/commit/83f04fe002f3496b526e77c63eff333864a20a2b)), closes [#1](https://github.com/norviah/watch-together/issues/1)
* replace notistack with react-toastify for notifications ([98332c0](https://github.com/norviah/watch-together/commit/98332c0d6c7c6b4e0ff8fa77b57b5889c3854682))


### Bug Fixes

* **backend/api:** use 'sendStatus' instead of 'send' ([52bca69](https://github.com/norviah/watch-together/commit/52bca69baf9c106d772cdc21e0611924e30df2c4))
* **frontend/components/usermenu:** remove 'pathname' from props ([557db1f](https://github.com/norviah/watch-together/commit/557db1fe5521ca228fb86f701dd672216753bf33))
* **frontend/next-auth:** cast a response from the api to 'any' ([cd47908](https://github.com/norviah/watch-together/commit/cd47908b220e5e6013c1cfab0413f7e3b12011fe))
* **frontend/structs/api:** check the type of a caught error when calling the api ([5fd5952](https://github.com/norviah/watch-together/commit/5fd5952b74d409588b7d5a9f83871d129c5f3686))
* **frontend:** cast a component's type to include a 'noAppbar' property ([ef5b926](https://github.com/norviah/watch-together/commit/ef5b92634ded69c8b6ce37437a4fd2d38efcc8ba))
* **frontend:** fix eslint rule violations ([70a9ba4](https://github.com/norviah/watch-together/commit/70a9ba4cf4d432e06c568a035d906185c30f6dff))
* **frontend:** use getServerSession over getSession server-side ([cb478ff](https://github.com/norviah/watch-together/commit/cb478ff92dc43ce5a235665f7038597387e739bd))
* **frontend:** use jwt for next-auth to support credentials ([aafa024](https://github.com/norviah/watch-together/commit/aafa024ca42c56eb1ce9b0b8d5a1bf08be34579a))


### Formatting

* **frontend/notifications:** wrap the close button within a box to ensure the icon does not get warped ([32bbac0](https://github.com/norviah/watch-together/commit/32bbac0470ac97cd544bab3692c1645d6ad3a3f1))
* **frontend:** adjust animation speed for toast notifications ([143b32f](https://github.com/norviah/watch-together/commit/143b32fb424f71e056618ec49a11bb39f29e2fe1))
* **frontend:** adjust margins for the close button on toast notifications ([5fa9d61](https://github.com/norviah/watch-together/commit/5fa9d618be00bca73f95b46aa10f5eb7ea177fd6))
* **frontend:** adjust margins for the close button on toast notifications ([bb27f0c](https://github.com/norviah/watch-together/commit/bb27f0c6b7a5f2c9c9a21ca71414b9c7d9ae6c22))
* **frontend:** move necessary files under the 'src' directory ([fdc010a](https://github.com/norviah/watch-together/commit/fdc010a489e3139c1cad3f37fd4768206d528737))
* **frontend:** set the toast container within the theme's provider, allowing notifications to get colors from material ui ([a1e7fd5](https://github.com/norviah/watch-together/commit/a1e7fd5bd8305d182517a14b1f3ef3ab36b8adb2))


### Build System

* **backend:** enforce the user to provide a name for a migration ([f4dbfe4](https://github.com/norviah/watch-together/commit/f4dbfe4406e8b37c014ce7a65111831b0f37a631))
* **frontend:** add a template for .env ([694f5e5](https://github.com/norviah/watch-together/commit/694f5e59023e0942b32fe4e222cb16fa3478634c))
* **frontend:** add script to generate prisma after installation ([c1af39d](https://github.com/norviah/watch-together/commit/c1af39d0be1c0689679df15919136842214dfc0e))
* **frontend:** rename the production build script from 'build:deploy' to 'build:production' ([e59d724](https://github.com/norviah/watch-together/commit/e59d7240949ac54995e2585e7a7cff3e362b19c2))
* **frontend:** update eslint rules ([7425247](https://github.com/norviah/watch-together/commit/7425247662d678aea177dd1a2e6c66feb67d4d4f))
* implement script to update whenever a change is pushed ([00eda20](https://github.com/norviah/watch-together/commit/00eda203ed413bc44d8abd653e0d13db80adc767))


### Refactor

* **frontend/components/UserMenu:** retrieve the path to redirect to from props ([d21f990](https://github.com/norviah/watch-together/commit/d21f990d89a925645a279bcb3c34bcaa51556ecf))
* **frontend:** refactor the theme implementation to be cleaner ([efdf825](https://github.com/norviah/watch-together/commit/efdf8255f059d1ec66cfafa818409d362421b101))
* import the local stylesheet last ([a490890](https://github.com/norviah/watch-together/commit/a49089028a57f2b15e3e1312e4906344f7cd034f))
* reorganize project into root directory ([9004140](https://github.com/norviah/watch-together/commit/90041408badc2d5a2ca460f09cc0c3b9c08dff67)), closes [#2](https://github.com/norviah/watch-together/issues/2)
* reorganize project into root directory ([64a76cb](https://github.com/norviah/watch-together/commit/64a76cbde542b3f6909a14359e17e77b21de5160))

## 0.1.0 (2023-02-20)

init: initial commit
