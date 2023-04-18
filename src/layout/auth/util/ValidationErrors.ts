import { capitalize } from '@/util/capitalize';

export const ValidationErrors = {
  required: (field: string): string => {
    return `${capitalize(field)} is required.`;
  },

  minLength: (field: string, length: number): string => {
    return `${capitalize(field)} must be at least 8 characters.`;
  },

  pattern: {
    email: `Please enter a valid email address.`,
    password: `Must contain at least one uppercase letter, one lowercase letter, one number, and one special character.`,
    username: `Must be 3-16 characters long and contain only alphanumeric characters and underscores.`,
  },
};

export default ValidationErrors;
