## Unreleased

### Refactors

- move the `tmdb` directory to `src` <code>[d809718](https://github.com/Norviah/media-hub/commit/d809718af017974e095f312fcfa8bfdf58d3e3e5)</code>

- move font files into `src/config` <code>[123d226](https://github.com/Norviah/media-hub/commit/123d226acb5b29b9803de4c4ded50be6fbf197d2)</code>

- create the folder `src/components/compound` to contain multi-file components <code>[0eaa410](https://github.com/Norviah/media-hub/commit/0eaa410aaae5a81c3e8d49b2abdecec13d686b14)</code>

- **font**: remove unused font imports <code>[d604058](https://github.com/Norviah/media-hub/commit/d604058995c8d66c46b127fe8faff610d08b9431)</code>

- **search**: have the search results use the new cover component for grid layout <code>[db41f2d](https://github.com/Norviah/media-hub/commit/db41f2d53da7922cf1f07ca91eab6a80688ea506)</code>

- **types**: refactor `SkeletalProps` to make it work as expected <code>[18a8c2e](https://github.com/Norviah/media-hub/commit/18a8c2edf600e1d27fc5173db1855dfb068c9a34)</code>

- **systems/search**: use a context provider to pass props <code>[2fa7d52](https://github.com/Norviah/media-hub/commit/2fa7d52c7884e8326befa3e23e39a040a891f703)</code>

- **search**: persist the layout parameter when clearing all tags <code>[219f08b](https://github.com/Norviah/media-hub/commit/219f08b3c535fb3b1b951847ce0e184daac7b153)</code>

- **search**: move server actions into a file <code>[646f8d1](https://github.com/Norviah/media-hub/commit/646f8d1975b243c96a83dd4b89d212cd207f00a1)</code>

- **search**: create a layout for the `/search` route <code>[3cdf34a](https://github.com/Norviah/media-hub/commit/3cdf34af1933ecac3bacc1ff41f70d8189908493)</code>

- **systems/search**: remove the wrapper between the page and the loading component <code>[6082a51](https://github.com/Norviah/media-hub/commit/6082a51d03c47be1ddbc4e5852de538cd419821c)</code>

- **search**: keep the `type` query parameter when clearing all tags <code>[fd83cf3](https://github.com/Norviah/media-hub/commit/fd83cf35e84a0b5d21515c3c395acc52ddc18fd3)</code>

- **types**: add a generic argument to `RouteItem` to specify a route's path <code>[b0eba92](https://github.com/Norviah/media-hub/commit/b0eba9287dcdd259237ecfba76fcade0d91b864d)</code>

- **components/SearchQuery**: ensure the debounced term isn't empty before pushing the new route <code>[7b2d050](https://github.com/Norviah/media-hub/commit/7b2d05049e5d41563b5d1549d8539d7ff9bca477)</code>

- **utils**: update `overrides` type in ConstructUrlOptions to additionally accept `null` or `undefined` <code>[fae18bc](https://github.com/Norviah/media-hub/commit/fae18bc4daacad2eea9ca5f033cee0e7523e11ab)</code>

- **components/QuerySelector**: constrict values for the `options` and `picked` property to the type as the specified key <code>[d661847](https://github.com/Norviah/media-hub/commit/d661847a5a519a7c29e9326b8ffc72f68031013b)</code>

- **systems/docs**: refactor the directory's structure <code>[355d03a](https://github.com/Norviah/media-hub/commit/355d03ae313340465f9e49c75357e6e078ec890c)</code>

- **systems/docs**: move the `DynamicLink` to the global components directory <code>[e64a721](https://github.com/Norviah/media-hub/commit/e64a7211326da793894dd0281750285b4f7f2cd9)</code>

- **systems/tmdb**: include a code in error messages <code>[add373c](https://github.com/Norviah/media-hub/commit/add373c8b4dab64c2b76065945728a107379f742)</code>

- **components/ThemeSelector**: allow additional class names through a property <code>[f5e600a](https://github.com/Norviah/media-hub/commit/f5e600a26d883ab8935f2577e44082f1592bcc38)</code>

- **components/UnorderedList**: merge the base class names with, if any, specified ones <code>[d66f0bf](https://github.com/Norviah/media-hub/commit/d66f0bf9883f55aa3f1a135f8cd5ac8211af7507)</code>

- **components/Header**: automatically set the ids of headers to the given text <code>[32c6a63](https://github.com/Norviah/media-hub/commit/32c6a637276424359f48b3b1baf324c1ce622066)</code>

- **components/ui**: add `TooltipArrow` for the `Tooltip` component <code>[701b3b7](https://github.com/Norviah/media-hub/commit/701b3b7c4d75229592b364a004c26bf4bb7afb57)</code>

- **components/ImageCard**: add skeleton state support <code>[a08c87c](https://github.com/Norviah/media-hub/commit/a08c87c21b4ec70aa6d4861f7ba03f8e2ee1b829)</code>

- **systems/tmdb**: move error structures into a single file <code>[2afcf82](https://github.com/Norviah/media-hub/commit/2afcf82d5577ba53b51b8f27973c1b0c04f3e3ad)</code>

- **systems/tmdb**: extract the logic for generating a placeholder image into a function <code>[9a83ac5](https://github.com/Norviah/media-hub/commit/9a83ac5a55ea7cb4ee64309d095e6397d2aa8864)</code>

- **systems/tmdb**: use the `accept` field when calling the api <code>[8464813](https://github.com/Norviah/media-hub/commit/8464813c5b5a3fa7656c9ee2200e20a3cffbbb88)</code>

- **utils**: refactor `constructUrl` to explicitly typecast the result as `Route` <code>[d2ef975](https://github.com/Norviah/media-hub/commit/d2ef975077ca0b3d135ce5722b8e2ec665bef3e8)</code>

- **search**: create a `search` group for all routes related to searching <code>[dd1b35b](https://github.com/Norviah/media-hub/commit/dd1b35bbde2a95261956e60638274054dbf89ac1)</code>

- **systems/tmdb**: rename `genres.movies` to `genres.movie` <code>[3e899f7](https://github.com/Norviah/media-hub/commit/3e899f7dc9f86618548bb1f234a06683e079262c)</code>

- **systems/tmdb**: change the year properties for `SearchMovieOptions` to numbers <code>[2440bc2](https://github.com/Norviah/media-hub/commit/2440bc25bb9c7e6b1b0d95ee10e9bb73b4d9dcba)</code>

- **components/QuerySelector**: allow the `searchPlaceholderText` property to be undefined <code>[61673b2](https://github.com/Norviah/media-hub/commit/61673b24555a12065649585c949eace0b705857e)</code>

- **types**: refactor the structure for types <code>[e8a3ab0](https://github.com/Norviah/media-hub/commit/e8a3ab02ee5563c36c9e4c08138f0db051d9e230)</code>

- **systems/tmdb**: refactor enums to objects <code>[2c69f46](https://github.com/Norviah/media-hub/commit/2c69f462615909197d9f43eacc4da13280f38f7c)</code>

- **components/layout**: improve route detection logic to include sub-routes <code>[7c644f8](https://github.com/Norviah/media-hub/commit/7c644f87f38483079eb245ee7f55b66b90dcb63b)</code>

### Features

- **config**: simplify the app's description <code>[1bbd293](https://github.com/Norviah/media-hub/commit/1bbd293a84dc4c17c9bbc13867c95ba0c5447616)</code>

- **components/QuerySelector**: close the dropdown if the user scrolls <code>[4c8101f](https://github.com/Norviah/media-hub/commit/4c8101f70270076de8e36b14c89cd040f092a417)</code>

- **components/ImageCard**: add support for coordination <code>[57c1254](https://github.com/Norviah/media-hub/commit/57c1254b23426224f1d0fe7db3eb8644bd7756d9)</code>

- **systems/search**: update search page to use coordinated images <code>[af6946b](https://github.com/Norviah/media-hub/commit/af6946ba6fdc277e49ba5a1f55ac201016633c33)</code>

- **systems**: add a system to coordinate images <code>[f3d9e4b](https://github.com/Norviah/media-hub/commit/f3d9e4b53922f1f7c1925eac1b50d344370e7a5c)</code>

- **components**: add a `Caption` component for displaying text within an element <code>[2a23136](https://github.com/Norviah/media-hub/commit/2a23136bb3d9fbc5f452abab1dfe7c87a436853b)</code>

- **search**: add metadata to add "Search" title <code>[39ab9d1](https://github.com/Norviah/media-hub/commit/39ab9d19647f11db5b1e0454f12ce96112a62fa4)</code>

- **pages**: add a selector for sorting <code>[e087d3f](https://github.com/Norviah/media-hub/commit/e087d3f70fdf4e547b6887d36b66623ae457c1a4)</code>

- **tmdb**: add schema for collections <code>[bba0524](https://github.com/Norviah/media-hub/commit/bba052411b0b256c1705925de7803e2d7c6a169c)</code>

- **search**: add a loading state for the trending page <code>[bfd9959](https://github.com/Norviah/media-hub/commit/bfd995998c5f06074d9a19c819dbbc7e5e2166a6)</code>

- **routes/search**: add a trending section in the landing page <code>[dd22b7d](https://github.com/Norviah/media-hub/commit/dd22b7d5013bd0eaa47eecff3fd027d47436d07b)</code>

- **systems/tmdb**: add `trending` endpoint <code>[4193f33](https://github.com/Norviah/media-hub/commit/4193f33f6616074c39e9fe81d6a37d8242379ab6)</code>

- **utils**: add a utility function to constrict visibility for elements <code>[147007e](https://github.com/Norviah/media-hub/commit/147007e16dca81b39d86dcc1c8f96d066bd88ea4)</code>

- **utils**: add a property to specify which query parameters to keep when constructing a new url <code>[760b340](https://github.com/Norviah/media-hub/commit/760b340255fb31d9c0ca7c9639616a1fc1b71aa1)</code>

- **search**: add a discover state to the search page <code>[479b446](https://github.com/Norviah/media-hub/commit/479b44648d5a013d7ee068b52289794f6f136816)</code>

- **components/QuerySelector**: add an option to specify query parameters to reset when a new value is picked <code>[2146f01](https://github.com/Norviah/media-hub/commit/2146f014d0fde2fa6a20b60e74a081a1bbc76d8a)</code>

- **system/search**: add an error handler for the initial query <code>[c85d359](https://github.com/Norviah/media-hub/commit/c85d3599543bd7897ed088607c10ab6681e53c1b)</code>

- **docs**: add documentation using mdx <code>[1244090](https://github.com/Norviah/media-hub/commit/1244090512b3fd78549d8a2c727d562740856f94)</code>

- **type**: add a type to represent properties for optional catch all routes <code>[192040c](https://github.com/Norviah/media-hub/commit/192040c96bc9dc57eb8c50d3697d5398858084d7)</code>

- **components/CodeBlock**: add an option to add a copy button <code>[beca74d](https://github.com/Norviah/media-hub/commit/beca74d41088fafc33e43d6424b5f467d8a6f8c8)</code>

- **components**: add a copy content component <code>[f6c54f4](https://github.com/Norviah/media-hub/commit/f6c54f40bc95c51b55db553df7ae1a1b5ae84ab8)</code>

- **systems/search**: render a tag for the layout query parameter <code>[65ee01f](https://github.com/Norviah/media-hub/commit/65ee01fce9c30692d28d2f4e608ea7f18b4d7381)</code>

- **search**: add a search page <code>[6adda48](https://github.com/Norviah/media-hub/commit/6adda487e740261a26db9dd89fcd559f483d23fb)</code>

- **hooks**: add a hook to manage infinite loading <code>[feea77e](https://github.com/Norviah/media-hub/commit/feea77e34052ddbc7c731a8f7d33eee5ee529448)</code>

- **components/ImageCard**: add support for route navigating <code>[ea19191](https://github.com/Norviah/media-hub/commit/ea19191872df8565888ac9b9fa25e023b34b3b2c)</code>

- **components**: add a component to provide the structure to render an image alongside relevant content <code>[b601296](https://github.com/Norviah/media-hub/commit/b601296ebb45388c494305b83764815ee368a627)</code>

- **components/QuerySelector**: close the menu when selecting an item if the component doesn't support multiple values <code>[884abcc](https://github.com/Norviah/media-hub/commit/884abccad1f704748773bdde62e96f7388883767)</code>

- **types**: add a type to ensure a subset of keys are required <code>[ac58d11](https://github.com/Norviah/media-hub/commit/ac58d114e9e7b4adc48aaec604b80d3368054b0a)</code>

- **types**: add a type to ensure all properties in an interface is explicitly specifeid <code>[39fb7d3](https://github.com/Norviah/media-hub/commit/39fb7d39053e469252216da3631bc1e0e7db11ac)</code>

- **components/QuerySelector**: add a property to specify the class for the scroll area <code>[a5fa2e8](https://github.com/Norviah/media-hub/commit/a5fa2e852b9c4cdb392d01054b7ed18aec3bc5c6)</code>

- **components**: add a component for modifying query parameters through an input field <code>[89914a9](https://github.com/Norviah/media-hub/commit/89914a9300e8bc3471689b5812eca6b9c5ba4381)</code>

- **systems/tmdb**: add a list of genres for tv shows and movies <code>[cade2e0](https://github.com/Norviah/media-hub/commit/cade2e07b8d76713072a8ae31d40db26f09b4f31)</code>

- **components**: add a component for modifying query parameters through a combobox <code>[3b5841f](https://github.com/Norviah/media-hub/commit/3b5841fa64a692f7589e7ac339fe646daeb2c701)</code>

- **utils**: implement a helper function to construct urls <code>[2b6f853](https://github.com/Norviah/media-hub/commit/2b6f8530b7d5ac5f145f01902debb22200337f6d)</code>

- **utils**: add a helper method to capitalize words in a string <code>[0c3d9ed](https://github.com/Norviah/media-hub/commit/0c3d9edd003a8edc8f068d4748e1482e3d2b0c29)</code>

- **systems/tmdb**: add `/keywords` endpoints for tv shows and movies <code>[e3dc67a](https://github.com/Norviah/media-hub/commit/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452)</code>

- **systems**: add an api wrapper for TMDB's api <code>[15ca06b](https://github.com/Norviah/media-hub/commit/15ca06bf548895d7fcacfe7fbeddceca1f71c0cd)</code>

### UI

- **components/QuerySelector**: darken the text for active queries <code>[7408db2](https://github.com/Norviah/media-hub/commit/7408db2c9a613c1a8e4b1a35133341e0d4f3d513)</code>

- **components/Command**: add a shadow under the root component <code>[c1a125f](https://github.com/Norviah/media-hub/commit/c1a125f979b96ee8517e86a46b1a834aa2413f8e)</code>

- update foreground colors for background and cards <code>[beb20c1](https://github.com/Norviah/media-hub/commit/beb20c142c898f1d5fc04628595bead08c2f6ce1)</code>

- **search**: increase height for image cards and change the column amount for breakpoints <code>[d70a0df](https://github.com/Norviah/media-hub/commit/d70a0dfbdb8f4a56529c0b43994833261b04910a)</code>

- **systems/search**: render titles in the image card for grid layout <code>[5e9afbf](https://github.com/Norviah/media-hub/commit/5e9afbf006afa8a16954206565ffb775395570b7)</code>

- **ui/Skeleton**: make skeletons have a border by default <code>[ea4d600](https://github.com/Norviah/media-hub/commit/ea4d600629589b3e353b3562981971dea6fe0514)</code>

- **components/Button**: add a color to represent when the button is active <code>[8eeaea8](https://github.com/Norviah/media-hub/commit/8eeaea8de5f5885bec0268c2d214bf0c8e0913d1)</code>

- **systems/search**: truncate descriptions for media lists to 2 lines <code>[fd449a2](https://github.com/Norviah/media-hub/commit/fd449a26643196b3dab7eec9658b93cd49488e4a)</code>

- **systems/search**: update styles for rendering media in a list <code>[7cc71b2](https://github.com/Norviah/media-hub/commit/7cc71b283dbc8400ef0b9a7d4ec1bf13a3a594b4)</code>

- **components/Button**: don't specify specific styles on dark mode for the outline variant <code>[755ee6c](https://github.com/Norviah/media-hub/commit/755ee6caa3f71f0fabbb38bb75a169f346d0dff6)</code>

- **systems/search**: update text color to reflect the default global foreground color being lightened <code>[a2c39b6](https://github.com/Norviah/media-hub/commit/a2c39b644037a9ff8af2c8a9fd4549c1ed9e227b)</code>

- **components/CodeBlock**: increase padding <code>[aca267c](https://github.com/Norviah/media-hub/commit/aca267c36a931bb69ada3e0b5786f5e5d3f8b2dc)</code>

- lighten the default color for the foreground <code>[cde8d93](https://github.com/Norviah/media-hub/commit/cde8d93c7c44ecc73cc1e627adfabde2c5a54403)</code>

- **docs**: set the content container to use all available width space <code>[1a9f99f](https://github.com/Norviah/media-hub/commit/1a9f99f9044ae4715a840433d34913923b9063f0)</code>

- **docs**: set the sidebar to also be in a container <code>[3633ed6](https://github.com/Norviah/media-hub/commit/3633ed6e032a3cc413b115b225dfbb40dc2f7441)</code>

- **search**: set the minimum height for the controls container <code>[ae223da](https://github.com/Norviah/media-hub/commit/ae223da2b976b9287b4f086e28db6768517c77e3)</code>

- **theme**: update foreground colors for both themes <code>[6a279d1](https://github.com/Norviah/media-hub/commit/6a279d1f0cc437c804463c8d331bf031ebdd9af3)</code>

- **components/Card**: set the default foreground color to the correct value <code>[e9c8f93](https://github.com/Norviah/media-hub/commit/e9c8f936586ff8b11915afdb820abca9f34c5b1e)</code>

- **theme**: set the background color of highlighted text to the primary color <code>[ba19c4f](https://github.com/Norviah/media-hub/commit/ba19c4f03c8616d7927e1a1e409e978b93449727)</code>

- update colors for toast notifications to give a clear distinction from title and description <code>[c3fba96](https://github.com/Norviah/media-hub/commit/c3fba96b8f7ecdc5376e1021f547755ce7fd278c)</code>

- **systems/search**: don't set the max height for the tag container <code>[9ef75db](https://github.com/Norviah/media-hub/commit/9ef75dbec4af3bbc324b8517e2502eb2f0c333d1)</code>

- **theme**: lighten `foreground-light` and `muted` for light them <code>[9522acd](https://github.com/Norviah/media-hub/commit/9522acdba763c7c0a15c88d13a4b6cda16f2593b)</code>

- **components/Button**: provide proper visual feedback when disabled <code>[96261ae](https://github.com/Norviah/media-hub/commit/96261aea6df8afadb0e4bf93adf3829807d1bab1)</code>

- **layout**: decrease the space between nav headers <code>[423caff](https://github.com/Norviah/media-hub/commit/423caffe69c4eb6615e9948d69742611a8bbe891)</code>

- **components/QuerySelector**: capitalize all rendered text <code>[3921da4](https://github.com/Norviah/media-hub/commit/3921da4632caa6fcddb7584bdf321a07190c7e18)</code>

- **theme**: update background and foreground colors <code>[809c540](https://github.com/Norviah/media-hub/commit/809c540c60676d63df46184d9804fc98e1f5f09b)</code>

- **components/Badge**: add `muted` as a new variant <code>[107647b](https://github.com/Norviah/media-hub/commit/107647b59d88d3b5f089ad4b13b6dbd02fa7d356)</code>

- **components/Button**: move specific class names to variants, rather than being default for all variants <code>[d85abe3](https://github.com/Norviah/media-hub/commit/d85abe33adc10a32cd5a4d14d185a14d18bf2b87)</code>

- **components/Command**: fix the tailwind classes for disabled state <code>[666e508](https://github.com/Norviah/media-hub/commit/666e50897a53196608542b5d4c87baf803aaeee7)</code>

- **components/Select**: mute the colors for unselected items in the dropdown <code>[7ed9bc7](https://github.com/Norviah/media-hub/commit/7ed9bc7e5b364b62a5cf60e85ebe24b730d82849)</code>

- **components/Select**: set the placeholder text to muted <code>[7c958e4](https://github.com/Norviah/media-hub/commit/7c958e4c40e783fa86df061b1e68d3c43fa4d7b3)</code>

- use the `border` color instead of `input` for input components <code>[cf36f9e](https://github.com/Norviah/media-hub/commit/cf36f9e8fd0b1c4492399d8f6f559be3a451a527)</code>

- **theme**: update theme colors to be inspired/taken from supabase <code>[fc16111](https://github.com/Norviah/media-hub/commit/fc16111acd015899ede62078162b6b1846768e5f)</code>

### Bug Fixes

- **search**: wrap calling the search endpoint in an else block <code>[dfb872e](https://github.com/Norviah/media-hub/commit/dfb872e664ea045287b3599e932383e9b2abc39f)</code>

- **search**: always render search controls except for trending state <code>[e262e62](https://github.com/Norviah/media-hub/commit/e262e6241d9fbd1abc1c1cea1d1b47623b3ddf4b)</code>

- **search**: ignore collections when rendering search results <code>[6eafe0f](https://github.com/Norviah/media-hub/commit/6eafe0f20d5520a78d6a2ec731d9ae8e94bf9467)</code>

- **search**: wrap the layout in a suspense component <code>[2a0bc62](https://github.com/Norviah/media-hub/commit/2a0bc6201f19eaeb23ade84a81ca2eef0c9f13f4)</code>

- **systems/tmdb**: set `Person.known_for_department` as nullish <code>[b0accce](https://github.com/Norviah/media-hub/commit/b0accce5c447ccf1a18696f3cb0baef1f5bd16be)</code>

- **components/Header**: don't constrict the type of children to strings <code>[bfe2772](https://github.com/Norviah/media-hub/commit/bfe2772050a18fb9c07d163edf86aa9e3902d58c)</code>

- **components/SearchQuery**: ensure that a search term is given before pushing the route <code>[848b639](https://github.com/Norviah/media-hub/commit/848b63924737b29ca70c07df906c0496fb61c751)</code>

- **systems/tmdb**: fix relative path <code>[a6a39f4](https://github.com/Norviah/media-hub/commit/a6a39f45118c91c8167124a4f27569b9bafcfa4a)</code>

### Reverted

- **search**: don't use context to pass props <code>[22ca7d7](https://github.com/Norviah/media-hub/commit/22ca7d7a9e3d36c3ddfd5221eecbc99c1ffee19e)</code>

### styles

- **component/QuerySelector**: set background color to muted on hover <code>[094b067](https://github.com/Norviah/media-hub/commit/094b067e7cdfa9989e66f811af6d09be02d61dc5)</code>

### types

- add `SkeletalProps` to generate types for components with a skeleton state <code>[6102f49](https://github.com/Norviah/media-hub/commit/6102f490fc4bcc613a49f8aef78883da86d13808)</code>

### Init

- initial commit <code>[e8f9818](https://github.com/Norviah/media-hub/commit/e8f981810514e3aaf6fcc99e4b7a47cbba39219b)</code>