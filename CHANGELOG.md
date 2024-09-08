## Unreleased

### Refactors

- **utils**: refactor `constructUrl` to explicitly typecast the result as `Route` <code>[d2ef975](https://github.com/Norviah/media-hub/commit/d2ef975077ca0b3d135ce5722b8e2ec665bef3e8)</code>

- **search**: create a `search` group for all routes related to searching <code>[dd1b35b](https://github.com/Norviah/media-hub/commit/dd1b35bbde2a95261956e60638274054dbf89ac1)</code>

- **systems/tmdb**: rename `genres.movies` to `genres.movie` <code>[3e899f7](https://github.com/Norviah/media-hub/commit/3e899f7dc9f86618548bb1f234a06683e079262c)</code>

- **systems/tmdb**: change the year properties for `SearchMovieOptions` to numbers <code>[2440bc2](https://github.com/Norviah/media-hub/commit/2440bc25bb9c7e6b1b0d95ee10e9bb73b4d9dcba)</code>

- **components/QuerySelector**: allow the `searchPlaceholderText` property to be undefined <code>[61673b2](https://github.com/Norviah/media-hub/commit/61673b24555a12065649585c949eace0b705857e)</code>

- **types**: refactor the structure for types <code>[e8a3ab0](https://github.com/Norviah/media-hub/commit/e8a3ab02ee5563c36c9e4c08138f0db051d9e230)</code>

- **systems/tmdb**: refactor enums to objects <code>[2c69f46](https://github.com/Norviah/media-hub/commit/2c69f462615909197d9f43eacc4da13280f38f7c)</code>

- **components/layout**: improve route detection logic to include sub-routes <code>[7c644f8](https://github.com/Norviah/media-hub/commit/7c644f87f38483079eb245ee7f55b66b90dcb63b)</code>

### UI

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

### Features

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

### Bug Fixes

- **components/SearchQuery**: ensure that a search term is given before pushing the route <code>[848b639](https://github.com/Norviah/media-hub/commit/848b63924737b29ca70c07df906c0496fb61c751)</code>

- **systems/tmdb**: fix relative path <code>[a6a39f4](https://github.com/Norviah/media-hub/commit/a6a39f45118c91c8167124a4f27569b9bafcfa4a)</code>

### Init

- initial commit <code>[e8f9818](https://github.com/Norviah/media-hub/commit/e8f981810514e3aaf6fcc99e4b7a47cbba39219b)</code>