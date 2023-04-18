/**
 * The various errors that can be thrown from next-auth.
 *
 * @see https://next-auth.js.org/configuration/pages#sign-in-page
 */
export const AuthErrors = {
  OAuthAccountNotLinked: 'Please log in using the original method you used to create your account.',
  CredentialsSignin: "We couldn't find an account with those credentials, please try again.",
};

export default AuthErrors;
