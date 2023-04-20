export interface DrawerContext {
  /**
   * Whether if the drawer is currently open.
   */
  open: boolean;

  /**
   * A function that will be used to switch the active theme.
   *
   * When implementing this function within the `App` component, we will assign
   * a function that will update the theme within the `App` component's state to
   * this property, allowing all child components to change the theme, thus
   * forcing the application to re-render.
   * @param theme The theme to switch to.
   */
  to: (value: boolean) => void;
}
