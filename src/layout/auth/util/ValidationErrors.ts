import { capitalize } from '@/util/capitalize';

export const ValidationErrors = {
  required: (field: string): string => {
    return `${capitalize(field)} is required`;
  },

  minLength: (field: string, length: number): string => {
    return `${capitalize(field)} must be at least ${length} characters.`;
  },

  pattern: {
    email: `Please enter a valid email address`,
    password: `Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character`,
    username: `Username must be 3-16 characters long and contain only alphanumeric characters and underscores`,
  },
};

export default ValidationErrors;
