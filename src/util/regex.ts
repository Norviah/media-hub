export const FORM = {
  EMAIL:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,

  /**
   * ^                   Start anchor
   * (?=.*?[A-Z])        At least one uppercase letter,
   * (?=.*?[a-z])        At least one lowercase letter,
   * (?=.*?[0-9])        At least one digit,
   * (?=.*?[#?!@$%^&*-]) At least one special character,
   * .{8,}               Ensure the string is at least 8 characters long.
   * $                   End anchor.
   */
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-\.]).{8,}$/,

  /**
   * Matches any string that is 3-16 characters long and contains only
   * alphanumeric characters and underscores.
   */
  USERNAME: /^[a-zA-Z0-9_]{3,16}$/,
};
