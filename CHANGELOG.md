## Unreleased

### Features

- **components**: add a component for modifying query parameters through a combobox <code>[3b5841f](https://github.com/Norviah/media-hub/commit/3b5841fa64a692f7589e7ac339fe646daeb2c701)</code>

- **utils**: implement a helper function to construct urls <code>[2b6f853](https://github.com/Norviah/media-hub/commit/2b6f8530b7d5ac5f145f01902debb22200337f6d)</code>

- **utils**: add a helper method to capitalize words in a string <code>[0c3d9ed](https://github.com/Norviah/media-hub/commit/0c3d9edd003a8edc8f068d4748e1482e3d2b0c29)</code>

- **systems/tmdb**: add `/keywords` endpoints for tv shows and movies <code>[e3dc67a](https://github.com/Norviah/media-hub/commit/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452)</code>

- **systems**: add an api wrapper for TMDB's api <code>[15ca06b](https://github.com/Norviah/media-hub/commit/15ca06bf548895d7fcacfe7fbeddceca1f71c0cd)</code>

### UI

- **theme**: update background and foreground colors <code>[809c540](https://github.com/Norviah/media-hub/commit/809c540c60676d63df46184d9804fc98e1f5f09b)</code>

- **components/Badge**: add `muted` as a new variant <code>[107647b](https://github.com/Norviah/media-hub/commit/107647b59d88d3b5f089ad4b13b6dbd02fa7d356)</code>

- **components/Button**: move specific class names to variants, rather than being default for all variants <code>[d85abe3](https://github.com/Norviah/media-hub/commit/d85abe33adc10a32cd5a4d14d185a14d18bf2b87)</code>

- **components/Command**: fix the tailwind classes for disabled state <code>[666e508](https://github.com/Norviah/media-hub/commit/666e50897a53196608542b5d4c87baf803aaeee7)</code>

- **components/Select**: mute the colors for unselected items in the dropdown <code>[7ed9bc7](https://github.com/Norviah/media-hub/commit/7ed9bc7e5b364b62a5cf60e85ebe24b730d82849)</code>

- **components/Select**: set the placeholder text to muted <code>[7c958e4](https://github.com/Norviah/media-hub/commit/7c958e4c40e783fa86df061b1e68d3c43fa4d7b3)</code>

- use the `border` color instead of `input` for input components <code>[cf36f9e](https://github.com/Norviah/media-hub/commit/cf36f9e8fd0b1c4492399d8f6f559be3a451a527)</code>

- **theme**: update theme colors to be inspired/taken from supabase <code>[fc16111](https://github.com/Norviah/media-hub/commit/fc16111acd015899ede62078162b6b1846768e5f)</code>

### Refactors

- **types**: refactor the structure for types <code>[e8a3ab0](https://github.com/Norviah/media-hub/commit/e8a3ab02ee5563c36c9e4c08138f0db051d9e230)</code>

- **systems/tmdb**: refactor enums to objects <code>[2c69f46](https://github.com/Norviah/media-hub/commit/2c69f462615909197d9f43eacc4da13280f38f7c)</code>

- **components/layout**: improve route detection logic to include sub-routes <code>[7c644f8](https://github.com/Norviah/media-hub/commit/7c644f87f38483079eb245ee7f55b66b90dcb63b)</code>

### Bug Fixes

- **systems/tmdb**: fix relative path <code>[a6a39f4](https://github.com/Norviah/media-hub/commit/a6a39f45118c91c8167124a4f27569b9bafcfa4a)</code>

### Init

- initial commit <code>[e8f9818](https://github.com/Norviah/media-hub/commit/e8f981810514e3aaf6fcc99e4b7a47cbba39219b)</code>