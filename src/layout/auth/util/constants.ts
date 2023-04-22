export const PASSWORD = {
  MIN_LENGTH: 8,
};

export const USERNAME = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 16,
};

export const ERRORS = {
  FORM: {
    REQUIRED: 'This field is required.',
    PASSWORD: {
      MIN_LENGTH: `Must be at least ${PASSWORD.MIN_LENGTH} characters.`,
      PATTERN:
        'Must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    },
    USERNAME: {
      PATTERN: `Must be 3-16 characters long and contain only alphanumeric characters and underscores.`,
      MIN_LENGTH: `Must be at least ${USERNAME.MIN_LENGTH} characters.`,
      MAX_LENGTH: `Must be at most ${USERNAME.MAX_LENGTH} characters.`,
    },
    EMAIL: {
      PATTERN: 'Please enter a valid email address.',
    },
  },

  /**
   * The various errors that can be thrown from next-auth.
   *
   * @see https://next-auth.js.org/configuration/pages#sign-in-page
   */
  AUTH: {
    OAuthAccountNotLinked:
      'Please sign in using the original method you used to create your account.',
    CredentialsSignin: "We couldn't find an account with those credentials, please try again.",
  },
};
