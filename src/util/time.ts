import { format, getTime, formatDistanceToNow } from 'date-fns';

/**
 * Formats a date to a string.
 *
 * @see https://date-fns.org/v2.29.3/docs/format
 * @param date The date to format.
 * @param template The template to format the date with.
 * @returns The formatted date.
 */
export function date(date: Date, template: string = 'dd MMM yyyy'): string {
  return format(date, template);
}

/**
 * Formats a date to a string with time included.
 *
 * @see https://date-fns.org/v2.29.3/docs/format
 * @param date The date to format.
 * @param template The template to format the date with.
 * @returns The formatted date.
 */
export function dateTime(date: Date, template: string = 'dd MMM yyyy p'): string {
  return format(date, template);
}

/**
 * Translates a date into a timestamp.
 *
 * @see https://date-fns.org/v2.29.3/docs/format
 * @param date The date to translate.
 * @returns The timestamp.
 */
export function timestamp(date: Date): number {
  return getTime(date);
}

/**
 * Translates a date into an English text representing the time until the date.
 *
 * @param date The date to translate.
 * @returns The string representing the time until the date.
 * @example
 * ```ts
 * import { add } from 'date-fns';
 * import { toString } from './time';
 *
 * const date = add(new Date(), { days: 1 });
 * const string = toString(date);
 *
 * console.log(string); // "in 1 day"
 * ```
 */
export function toString(date: Date): string {
  return formatDistanceToNow(date, {
    addSuffix: true,
  });
}
