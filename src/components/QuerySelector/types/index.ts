import type { RequireExactlyOne } from 'type-fest';
import type { QuerySelectorInfo, Text } from '../components';

export type QuerySelectorPickedProps<Schema extends Record<string, any>, Key extends keyof Schema> =
  | {
      multi: true;
      picked: `${NonNullable<Schema[Key]>}`[];
    }
  | {
      multi: false;
      picked: `${NonNullable<Schema[Key]>}` | null | undefined;
    };

/**
 * @template Schema The structure of the query parameters.
 * @template Key The specific key of the parameters to modify.
 */
export type BaseQuerySelectorProps<Schema extends Record<string, any>, Key extends keyof Schema> = {
  /**
   * The name of the query parameter the selector is for.
   *
   * This property represents the specific query parameter that the selector
   * will modify. When a user selects an option, the value wil be assigned to
   * this query parameter when constructing a URL.
   */
  name: Key;

  /**
   * The query parameters.
   *
   * References the current values of the query parameters active within the
   * URL.
   */
  params: Schema;

  /**
   * Options available for selection.
   *
   * Renders all specified options within a flat list.
   */
  options: `${NonNullable<Schema[Key]>}`[];

  /**
   * Groups sections with titles and associated options.
   *
   * If specified, the selector will instead render the sections and their
   * associated options.
   */
  sections: { title: string; options: `${NonNullable<Schema[Key]>}`[] }[];

  /**
   * An array of query parameters to reset when a selection is made.
   *
   * When a selection is made, the query parameters specified in this array
   * will be removed from the URL.
   */
  forceReset?: (keyof Schema)[];

  /**
   * The classes to apply to various sections of the component.
   */
  classes?: {
    popover?: string;
    content?: string;
    scrollArea?: string;
    button?: string;
    text?: string;
  };

  /**
   * The placeholder text for the search input.
   *
   * This string represents the placeholder text for the search input field in
   * the dropdown, it should be used to give context to the user on what they
   * are searching for.
   */
  searchPlaceholderText?: string;

  /**
   * The text to display when no search results are found.
   */
  searchEmptyText: string;

  /**
   * Whether if the selector should display an arrow within the dropdown.
   *
   * If enabled, the dropdown will render an arrow pointing to the trigger
   * component.
   */
  arrow?: boolean;

  /**
   * The component to use as the trigger for the selector.
   *
   * This component is used to render the trigger section of the selector. It
   * should be a component that can be interacted with, such as a button or
   * a link.
   */
  trigger: typeof Text | typeof QuerySelectorInfo;

  /**
   * The function used to render a value in the trigger section.
   *
   * The values used within this selector may not be in a human-friendly format,
   * this function can be implemented to change how the value is rendered in
   * selector's trigger.
   *
   * @param string The value to render.
   * @returns The rendered value.
   * @example
   *
   * ```tsx
   * function parse(string: `${string}.${string}`): string {
   *   return string.split('.').map((s) => s[0].toUpperCase() + s.slice(1)).join(' ');
   * }
   *
   * <QuerySelector
   *   ...
   *   renderTrigger={parse}
   * />
   * ```
   */
  renderTrigger?: (string: string) => string;

  /**
   * The function used to render a value within the selector's dropdown.
   *
   * Similar to `renderTrigger`, this function can be used to determine how
   * to render a value within the selector's dropdown.
   *
   * @param string The value to render.
   * @returns The rendered value.
   * @example
   *
   * ```tsx
   * function parse(string: `${string}.${string}`): string {
   *   return string.split('.').map((s) => s[0].toUpperCase() + s.slice(1)).join(' ');
   * }
   *
   * <QuerySelector
   *   ...
   *   renderOption={parse}
   * />
   * ```
   */
  renderOption?: (string: string) => string;
};

export type QuerySelectorProps<
  Schema extends Record<string, any>,
  Key extends keyof Schema,
> = RequireExactlyOne<BaseQuerySelectorProps<Schema, Key>, 'options' | 'sections'> &
  QuerySelectorPickedProps<Schema, Key>;

export type TriggerProps<Schema extends Record<string, any>, Key extends keyof Schema> = Pick<
  QuerySelectorProps<Schema, Key>,
  'classes' | 'picked' | 'multi' | 'renderTrigger'
> & { open: boolean };
