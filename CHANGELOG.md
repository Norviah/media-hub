## Unreleased

### UI

- **components/UserMenu**: remove outline on profile picture when focused <code>[ec2641e](https://github.com/Norviah/media-hub.git/commit/ec2641e01faf8ad041c923ba12a11b2c88bb378d)</code>

- **components/ThemeSelector**: render the tooltip to the left of the button <code>[a571be8](https://github.com/Norviah/media-hub.git/commit/a571be8669700c6535d38cc0b6555554e4ea6f2d)</code>

- **theme**: darken/lighten dark/light mode <code>[ef1b27b](https://github.com/Norviah/media-hub.git/commit/ef1b27bff6b391585895fe4c47edeebbf35dac12)</code>

- **page/search**: remove x padding <code>[6216fc6](https://github.com/Norviah/media-hub.git/commit/6216fc6b5bafa8d34682bbbe0b43f89f9256f970)</code>

- **components/Card**: remove border for all cards <code>[3c8e31c](https://github.com/Norviah/media-hub.git/commit/3c8e31c7052d4b3bf60a6c5cff0c697a03ac0ffd)</code>

- **layout**: remove the command menu from the header <code>[1d89a0c](https://github.com/Norviah/media-hub.git/commit/1d89a0c9c4a43f99eb12301fac8fca6d14e8b37b)</code>

- **components/ThemeSelector**: factor component to be a toggle button <code>[7efa4d6](https://github.com/Norviah/media-hub.git/commit/7efa4d66b109d712c08934e5839283134922a905)</code>

- implement the 'brandon grotesque' font <code>[2d9f956](https://github.com/Norviah/media-hub.git/commit/2d9f956c50450fe8ad201953cd1d0a6bfaefff65)</code>

### Features

- **prisma**: use prisma accelerate <code>[8dd2ffa](https://github.com/Norviah/media-hub.git/commit/8dd2ffaff55111edcfef80e3b11c7f1ed4939571)</code>

- **components/SearchForm**: keep filters and layout when searching for a query <code>[b539067](https://github.com/Norviah/media-hub.git/commit/b5390678f02bf580de57e80fd0212afc0f70d873)</code>

- implement a search system with TMDB <code>[af124fa](https://github.com/Norviah/media-hub.git/commit/af124fa9e37afe9638325b9f37c9ca14133c076f)</code>

- **components/Button**: add a variant for icon buttons <code>[ab59cf2](https://github.com/Norviah/media-hub.git/commit/ab59cf26bc97058396bd4603351dc1edaf4d39de)</code>

### Refactored

- **components/search**: extract `createUrl` into its own file <code>[4c62c80](https://github.com/Norviah/media-hub.git/commit/4c62c80953f045347962e178e0b390046e8eaf50)</code>

- use `sonner` for toast notifications <code>[fdae805](https://github.com/Norviah/media-hub.git/commit/fdae805ba9f4bcc7fc515758810e19b7c7b4d864)</code>

- **types**: update page props to include undefined values <code>[a80d16c](https://github.com/Norviah/media-hub.git/commit/a80d16c7319fd0da96fad356e0accb533e16a51d)</code>

- use server actions for api calls <code>[4badc19](https://github.com/Norviah/media-hub.git/commit/4badc19ce7adcfd6256f6d9b3ebd049c58399a81)</code>

## [v0.4.0](https://github.com/Norviah/media-hub.git/compare/v0.3.0...v0.4.0) (2023-11-10)

### Features

- **routes/Profile**: ensure the user is authenticated to access the `/profile` route <code>[bd0c285](https://github.com/Norviah/media-hub.git/commit/bd0c28597997731b7c809b41ef2c01f9c33b1f00)</code>

- implement a form to allow users to change their username <code>[0560072](https://github.com/Norviah/media-hub.git/commit/056007239540dde57157d93e76ff3e462fbcbe16)</code>

- **trpc**: implement an authenticated procedure <code>[b735490](https://github.com/Norviah/media-hub.git/commit/b7354903f247eb4e6ec764987e96f90e104a9e17)</code>

- **components**: add a component to represent aspects of a page <code>[8c77bc1](https://github.com/Norviah/media-hub.git/commit/8c77bc159dd1259e8ec5dd0e80e6ef76a5f7c65a)</code>

- **next-auth**: add the user's id within the payload <code>[d8ba2f2](https://github.com/Norviah/media-hub.git/commit/d8ba2f29e7f1b47d977511b45e8de3527f4a6278)</code>

- initialize trpc <code>[08f33a4](https://github.com/Norviah/media-hub.git/commit/08f33a469ab0a6155687359914b0d2644be0be50)</code>

- **auth**: implement a login system <code>[7725710](https://github.com/Norviah/media-hub.git/commit/7725710b34d8870fdf87741e0c8237baf6a9dd79)</code>

- **components/Input**: implement a property to represent error/helper text <code>[824c713](https://github.com/Norviah/media-hub.git/commit/824c7138f74e639f97b736895f8dde5e67c0284f)</code>

- **prisma**: update schema for next-auth <code>[9a95a14](https://github.com/Norviah/media-hub.git/commit/9a95a1497a4f486c7c72b1cc3f7fc6a5850c7cd4)</code>

- implement a menu to represent the user <code>[82013b3](https://github.com/Norviah/media-hub.git/commit/82013b31be511fe778a5d94b16f9966d9e2fc160)</code>

- initialize prisma + next-auth <code>[0960dc8](https://github.com/Norviah/media-hub.git/commit/0960dc8b9fbb5f7875fc810bdb37eb34921c2abd)</code>

- implement the layout for auth pages <code>[d37244c](https://github.com/Norviah/media-hub.git/commit/d37244c817c44052340d63253849070f8652b2bf)</code>

- implement the base layout for the application <code>[b103f0d](https://github.com/Norviah/media-hub.git/commit/b103f0daade4dc6b96fbf727aca747e42a406849)</code>

- **components**: add a component icon for the logo <code>[255f731](https://github.com/Norviah/media-hub.git/commit/255f7311a192d9e698148f9da40d8557bae1aba7)</code>

- **types**: implement a type to represent the props a page gets <code>[02f8055](https://github.com/Norviah/media-hub.git/commit/02f805595ec88450523e3ece98453448f9636613)</code>

- **nextjs**: enable the experimental statically typed links feature <code>[71a7b42](https://github.com/Norviah/media-hub.git/commit/71a7b429e55bea5b1f8d2c52c0261fbd27ad33c2)</code>

### UI

- **components/Toast**: implement the new variant `success` <code>[17d2e26](https://github.com/Norviah/media-hub.git/commit/17d2e266444e616767758f9cf299653c339d2fb0)</code>

- **layout/Profile**: implement a sidebar for the profile route <code>[5c9807f](https://github.com/Norviah/media-hub.git/commit/5c9807fe548ce91f3f4a11338b3c017b4e4fb3a1)</code>

- **components/NavBar**: set the foreground of other routes to mute <code>[3eced3b](https://github.com/Norviah/media-hub.git/commit/3eced3b50c20105a603bd693c911348f2e89404b)</code>

- set the application within a container to reflect breakpoints <code>[f61c511](https://github.com/Norviah/media-hub.git/commit/f61c51109088e4a5795c89742eeda95e8568cd4e)</code>

- **components/Command**: set the accent color to the proper source <code>[e01d453](https://github.com/Norviah/media-hub.git/commit/e01d453f254b2d9cdd8831dece33a34375543598)</code>

- **components/NavBar**: only set other routes from the current to change color when hovered over <code>[88f07fc](https://github.com/Norviah/media-hub.git/commit/88f07fcfb2b73948eef8189c99168580d33978fa)</code>

- **tailwind**: implement a nord color scheme <code>[ee1ab23](https://github.com/Norviah/media-hub.git/commit/ee1ab23a6fceea849df025fec3cfe199c2ee8c2c)</code>

- **components/Button**: ensure the loading spinner infers the correct color <code>[af18c14](https://github.com/Norviah/media-hub.git/commit/af18c140c24aaf20a40f7da6c346c62a5ca60f60)</code>

- **components/ThemeSelector**: remove the outline when focused <code>[b819a1e](https://github.com/Norviah/media-hub.git/commit/b819a1eb9a0b3ff65e4cb3b89010e2e15ac02042)</code>

- **components**: set the cursor to point when hovering over a command item <code>[5efcf4e](https://github.com/Norviah/media-hub.git/commit/5efcf4ec86107cdc112f3f442350120e0a8723ea)</code>

### Refactored

- **css**: group light mode values under a class <code>[9d01668](https://github.com/Norviah/media-hub.git/commit/9d016686d65025111a1b401e9ff282f7f2270644)</code>

### Bug Fixes

- **prettier**: fix linting errors <code>[258dedb](https://github.com/Norviah/media-hub.git/commit/258dedbb1efcd13543f835fa6d560588cee4875d)</code>

- **components/auth/Form**: do not pass given props to the base div element <code>[750d66b](https://github.com/Norviah/media-hub.git/commit/750d66b22e01ec10ca689de2076c39ea090d33ec)</code>

- **components**: ensure the metadata for icons represent the correct label <code>[8d36d35](https://github.com/Norviah/media-hub.git/commit/8d36d35a054551e90e40396a59258c3a6fb5b6e0)</code>

### Init

- implement app router template <code>[c2337a3](https://github.com/Norviah/media-hub.git/commit/c2337a37c8315990a0290770ddd205f0e22c4a62)</code>

## [v0.3.0](https://github.com/Norviah/media-hub.git/compare/v0.2.0...v0.3.0) (2023-04-11)

### Reverted

- re-implement support for authenticating via credentials <code>[7b7f057](https://github.com/Norviah/media-hub.git/commit/7b7f0575eb75f8dca3dbdb29ac4803881c62a203)</code>

- re-implement support for authenticating via credentials <code>[dfe8877](https://github.com/Norviah/media-hub.git/commit/dfe88776d727bb3de3f32c744a23a1540c933077)</code>

### Bug Fixes

- **frontend/components/Drawer**: get the current session within the component <code>[533333b](https://github.com/Norviah/media-hub.git/commit/533333bc8a50ef16064c424c45325deefddec75d)</code>

- **frontend/components/Drawer**: get the current session within the component <code>[d999ddd](https://github.com/Norviah/media-hub.git/commit/d999ddd49ea236bfae1316eed588290a3942d063)</code>

- **frontend/components/Drawer**: wrap the children of a Box component in a fragment <code>[1e90154](https://github.com/Norviah/media-hub.git/commit/1e90154f3d94b8f726f20e3a5427b30f14e82ae9)</code>

- **frontend/components/Drawer**: wrap the children of a Box component in a fragment <code>[c9b5ca9](https://github.com/Norviah/media-hub.git/commit/c9b5ca94b380d01b2f81017d1ec06558cbcc9949)</code>

### Features

- **frontend**: implement an export referencing common paths <code>[731bc8b](https://github.com/Norviah/media-hub.git/commit/731bc8b7b9faa2a7a7f71e2948138bed8f4ddc49)</code>

- **frontend**: implement an export referencing common paths <code>[6f4cd3e](https://github.com/Norviah/media-hub.git/commit/6f4cd3eb07796f69bb1daefc94a1fe6d2016be4a)</code>

- **frontend/components/UserMenu**: implement states to prevent users from spamming buttons <code>[fbd4d54](https://github.com/Norviah/media-hub.git/commit/fbd4d54dd524218b1db84a403cccc7cc48e1e349)</code>

- **frontend/components/UserMenu**: implement states to prevent users from spamming buttons <code>[ee5403a](https://github.com/Norviah/media-hub.git/commit/ee5403a7ae361338c73ba247eb5d8186f7a4fdab)</code>

- **frontend**: implement a profile page <code>[d23e489](https://github.com/Norviah/media-hub.git/commit/d23e48960cf227eee7fca9c598c7916c38ed0c43)</code>

- **frontend**: implement a profile page <code>[b1ac0b5](https://github.com/Norviah/media-hub.git/commit/b1ac0b54e2c3f9fa892dff7bd9b6e4e7cfe1f4a2)</code>

- **frontend**: implement an 'about' page for information regarding the website <code>[371bbf6](https://github.com/Norviah/media-hub.git/commit/371bbf67c074583391b43c32bbb3688a59fb0fc1)</code>

- **frontend**: implement an 'about' page for information regarding the website <code>[e01500e](https://github.com/Norviah/media-hub.git/commit/e01500e22c513473660c475ee2ef71caab1c8f75)</code>

- **frontend**: implement a sidebar <code>[98a304d](https://github.com/Norviah/media-hub.git/commit/98a304d96ba839a5065750966b4475d8469c372d)</code>

- **frontend**: implement a sidebar <code>[7c20a5e](https://github.com/Norviah/media-hub.git/commit/7c20a5e20ff4a7f84b0684776d1666590ed745d9)</code>

### UI

- **frontend/components/Drawer**: remove padding on list items <code>[a249daf](https://github.com/Norviah/media-hub.git/commit/a249daf71e9563ec5969cd7304013eaa976f36c6)</code>

- **frontend/components/Drawer**: remove padding on list items <code>[34acaa6](https://github.com/Norviah/media-hub.git/commit/34acaa652ff870bff3d34819de88bc6697eff1bf)</code>

### Build System

- **nextjs**: enable the experimental statically typed links feature <code>[cea61de](https://github.com/Norviah/media-hub.git/commit/cea61deee7f87032fb3eef9a449e17980e3e77ec)</code>

### Init

- implement app router template <code>[cc633bf](https://github.com/Norviah/media-hub.git/commit/cc633bfd67c6d69eef4736c9e9e4236cff8bcc4d)</code>

## [v0.2.0](https://github.com/Norviah/media-hub.git/compare/v0.1.0...v0.2.0) (2023-04-08)

### Refactored

- reorganize project into root directory <code>[64a76cb](https://github.com/Norviah/media-hub.git/commit/64a76cbde542b3f6909a14359e17e77b21de5160)</code>

- **frontend/components/UserMenu**: retrieve the path to redirect to from props <code>[d21f990](https://github.com/Norviah/media-hub.git/commit/d21f990d89a925645a279bcb3c34bcaa51556ecf)</code>

- import the local stylesheet last <code>[a490890](https://github.com/Norviah/media-hub.git/commit/a49089028a57f2b15e3e1312e4906344f7cd034f)</code>

- **frontend**: refactor the theme implementation to be cleaner <code>[efdf825](https://github.com/Norviah/media-hub.git/commit/efdf8255f059d1ec66cfafa818409d362421b101)</code>

### Features

- **frontend**: only support google for authentication <code>[e171c4e](https://github.com/Norviah/media-hub.git/commit/e171c4e6a476bc8a625de735cb89783eb5035fb6)</code>

- **frontend/structs/API**: implement a method to handle calling and notifying a user for an api request <code>[93f3668](https://github.com/Norviah/media-hub.git/commit/93f3668a2bfcade3f9207ea033b4bd2f42bf8c8f)</code>

- **frontend**: set ids for toast notifications to prevent duplicates <code>[1ccae65](https://github.com/Norviah/media-hub.git/commit/1ccae651fecfb221b4aeea181e97dfda38dd0c81)</code>

- **frontend/components/_app**: only change the theme if it differs from the active theme <code>[f58b857](https://github.com/Norviah/media-hub.git/commit/f58b85787a1ec64cf25f4daa323b67580819f13b)</code>

- **frontend/components/UserMenu**: redirect back to the same page when the signin/signout button is clicked <code>[a1ed027](https://github.com/Norviah/media-hub.git/commit/a1ed0270db48a8084daf5c4a35f22221b5c2e916)</code>

- **frontend**: redirect to the specified callback after a user has created an account <code>[2787928](https://github.com/Norviah/media-hub.git/commit/2787928c5a6bca27c6d0c4b16b3aa89a0f4e8fae)</code>

- **frontend**: add a link component that combines material ui and next <code>[5c18f03](https://github.com/Norviah/media-hub.git/commit/5c18f03bc260bce861c9bd1f5a6a6fabe830bc9d)</code>

- **frontend**: implement a state system within the signup/signin page <code>[6a24c80](https://github.com/Norviah/media-hub.git/commit/6a24c800d74e41a46a9716bf4167c5bcbb22b974)</code>

- **frontend**: move the head tag to the _app component to dynamically set the app's theme <code>[a77df32](https://github.com/Norviah/media-hub.git/commit/a77df32fe1597203b72dbc6b01dc5b29f62e6867)</code>

- **frontend**: redirect the user to the home page if they attempt to visit the signup page while signed-in <code>[3faa8a2](https://github.com/Norviah/media-hub.git/commit/3faa8a2cf9d8431385788d2ba54cafcf77191593)</code>

- replace notistack with react-toastify for notifications <code>[98332c0](https://github.com/Norviah/media-hub.git/commit/98332c0d6c7c6b4e0ff8fa77b57b5889c3854682)</code>

- **frontend**: add favicons <code>[35afb31](https://github.com/Norviah/media-hub.git/commit/35afb3140df3f280369a061fe304ce95ece3709e)</code>

- **frontend**: opt for next links when specifying links <code>[e425bf5](https://github.com/Norviah/media-hub.git/commit/e425bf5f8a93d6f6b1791548d3f5ba6f49b3b86d)</code>

- **frontend**: add a home button in the signin and signup pages <code>[a3096e6](https://github.com/Norviah/media-hub.git/commit/a3096e6f2626955b8ee50d21276d5186b05c3486)</code>

- **frontend**: redirect to the homepage if the signin page is visited while signed in <code>[7b994c0](https://github.com/Norviah/media-hub.git/commit/7b994c0704a014d55fc7775f906df3458e6e037f)</code>

- **backend**: move the backend within the next application <code>[ae90eb1](https://github.com/Norviah/media-hub.git/commit/ae90eb146e28cf284d7717332593ef23bdac27e0)</code>

- **frontend**: implement authentication <code>[7e811cd](https://github.com/Norviah/media-hub.git/commit/7e811cd87e6f825c0f52fbeae6e7817d5e195643)</code>

- **frontend**: add a page dedicated page for a 404 error <code>[9ff9932](https://github.com/Norviah/media-hub.git/commit/9ff9932a4dfb5357a3d3e1594a83fb329593755d)</code>

- **frontend**: edit the _error page to reflect a generic error <code>[8d0fe0c](https://github.com/Norviah/media-hub.git/commit/8d0fe0c368ad66ba2126aeb68e910c8a51671051)</code>

- **backend**: update database to know how a user created an account <code>[569f197](https://github.com/Norviah/media-hub.git/commit/569f197cbd9e6d8c3fa2752135b75bd590650d8b)</code>

- **backend**: implement CORS <code>[2d85888](https://github.com/Norviah/media-hub.git/commit/2d85888c8bb8bd2d8d81cc31809f6c0ae8f4dec0)</code>

- **frontend**: make the default theme dark mode <code>[cf1ec42](https://github.com/Norviah/media-hub.git/commit/cf1ec42a84de1bde8702008a8e094e17c39096c0)</code>

- **frontend**: implement a custom 404 page <code>[be254b3](https://github.com/Norviah/media-hub.git/commit/be254b340b2513ca8cbc13e3a5b66eed2fdc60be)</code>

- **frontend**: add a utility function to capitalize a string <code>[dc1d637](https://github.com/Norviah/media-hub.git/commit/dc1d63744d842d29a7a041b0a01b690068a12e7a)</code>

- **frontend**: implement a theme switcher <code>[e05c13b](https://github.com/Norviah/media-hub.git/commit/e05c13b0619aa1806599875797884c90e6b6d7f7)</code>

- **frontend**: implement themes <code>[1fe990d](https://github.com/Norviah/media-hub.git/commit/1fe990d4660b9e7306da78e71dd14955a9438aed)</code>

- **frontend**: implement the base structure for the application <code>[aabca37](https://github.com/Norviah/media-hub.git/commit/aabca37093d6a0df13cbb4e2d2ad0fe0190766e3)</code>

- **backend**: add authentication <code>[35386b5](https://github.com/Norviah/media-hub.git/commit/35386b522f923281dad086808e90302ffb582455)</code>

- **backend/docs**: add more metadata information about the api documentation <code>[94b11a2](https://github.com/Norviah/media-hub.git/commit/94b11a21b1567f0abb078310515fcd0f8fdbc3cd)</code>

- **backend/controllers**: log when a user has been created <code>[19b6f2d](https://github.com/Norviah/media-hub.git/commit/19b6f2dd3f487ba438dcc9a2c22aacc03dc52a23)</code>

- **backend/controllers**: hash passwords when creating a user <code>[63b733e](https://github.com/Norviah/media-hub.git/commit/63b733e5526f3dbeb427f03eda9ab41ba94c1f5e)</code>

- **backend/controllers**: implement the user/signup endpoint <code>[79143c1](https://github.com/Norviah/media-hub.git/commit/79143c109dde87d5ae0e72d9b19ec903650e0d43)</code>

- **backend/prisma**: implement the user model <code>[9d5cf12](https://github.com/Norviah/media-hub.git/commit/9d5cf120c80801d8e3bb73080e3946caca5c68bd)</code>

### Build System

- **backend**: enforce the user to provide a name for a migration <code>[f4dbfe4](https://github.com/Norviah/media-hub.git/commit/f4dbfe4406e8b37c014ce7a65111831b0f37a631)</code>

- **frontend**: rename the production build script from 'build:deploy' to 'build:production' <code>[e59d724](https://github.com/Norviah/media-hub.git/commit/e59d7240949ac54995e2585e7a7cff3e362b19c2)</code>

- **frontend**: add script to generate prisma after installation <code>[c1af39d](https://github.com/Norviah/media-hub.git/commit/c1af39d0be1c0689679df15919136842214dfc0e)</code>

- **frontend**: update eslint rules <code>[7425247](https://github.com/Norviah/media-hub.git/commit/7425247662d678aea177dd1a2e6c66feb67d4d4f)</code>

- **frontend**: add a template for .env <code>[694f5e5](https://github.com/Norviah/media-hub.git/commit/694f5e59023e0942b32fe4e222cb16fa3478634c)</code>

- implement script to update whenever a change is pushed <code>[00eda20](https://github.com/Norviah/media-hub.git/commit/00eda203ed413bc44d8abd653e0d13db80adc767)</code>

### UI

- **frontend**: set the toast container within the theme's provider, allowing notifications to get colors from material ui <code>[a1e7fd5](https://github.com/Norviah/media-hub.git/commit/a1e7fd5bd8305d182517a14b1f3ef3ab36b8adb2)</code>

- **frontend/notifications**: wrap the close button within a box to ensure the icon does not get warped <code>[32bbac0](https://github.com/Norviah/media-hub.git/commit/32bbac0470ac97cd544bab3692c1645d6ad3a3f1)</code>

- **frontend**: adjust margins for the close button on toast notifications <code>[5fa9d61](https://github.com/Norviah/media-hub.git/commit/5fa9d618be00bca73f95b46aa10f5eb7ea177fd6)</code>

- **frontend**: adjust margins for the close button on toast notifications <code>[bb27f0c](https://github.com/Norviah/media-hub.git/commit/bb27f0c6b7a5f2c9c9a21ca71414b9c7d9ae6c22)</code>

- **frontend**: adjust animation speed for toast notifications <code>[143b32f](https://github.com/Norviah/media-hub.git/commit/143b32fb424f71e056618ec49a11bb39f29e2fe1)</code>

- **frontend**: move necessary files under the 'src' directory <code>[fdc010a](https://github.com/Norviah/media-hub.git/commit/fdc010a489e3139c1cad3f37fd4768206d528737)</code>

### Bug Fixes

- **frontend/components/usermenu**: remove 'pathname' from props <code>[557db1f](https://github.com/Norviah/media-hub.git/commit/557db1fe5521ca228fb86f701dd672216753bf33)</code>

- **frontend**: use getServerSession over getSession server-side <code>[cb478ff](https://github.com/Norviah/media-hub.git/commit/cb478ff92dc43ce5a235665f7038597387e739bd)</code>

- **frontend**: use jwt for next-auth to support credentials <code>[aafa024](https://github.com/Norviah/media-hub.git/commit/aafa024ca42c56eb1ce9b0b8d5a1bf08be34579a)</code>

- **frontend/next-auth**: cast a response from the api to 'any' <code>[cd47908](https://github.com/Norviah/media-hub.git/commit/cd47908b220e5e6013c1cfab0413f7e3b12011fe)</code>

- **frontend/structs/api**: check the type of a caught error when calling the api <code>[5fd5952](https://github.com/Norviah/media-hub.git/commit/5fd5952b74d409588b7d5a9f83871d129c5f3686)</code>

- **frontend**: cast a component's type to include a 'noAppbar' property <code>[ef5b926](https://github.com/Norviah/media-hub.git/commit/ef5b92634ded69c8b6ce37437a4fd2d38efcc8ba)</code>

- **frontend**: fix eslint rule violations <code>[70a9ba4](https://github.com/Norviah/media-hub.git/commit/70a9ba4cf4d432e06c568a035d906185c30f6dff)</code>

- **backend/api**: use 'sendStatus' instead of 'send' <code>[52bca69](https://github.com/Norviah/media-hub.git/commit/52bca69baf9c106d772cdc21e0611924e30df2c4)</code>

### Removed Features

- **frontend**: remove api routes <code>[eb2a832](https://github.com/Norviah/media-hub.git/commit/eb2a8322864e4664b3af75d477c9b19175105f42)</code>

## v0.1.0 (2023-02-20)

### Init

- initial commit <code>[f9ae124](https://github.com/Norviah/media-hub.git/commit/f9ae12402111fada47e0451651c88d3571ce8eb1)</code>