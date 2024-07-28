export const MonetizationTypes = {
  Flatrate: 'flatrate',
  Free: 'free',
  Ads: 'ads',
  Rent: 'rent',
  Buy: 'buy',
} as const;

export type MonetizationType = (typeof MonetizationTypes)[keyof typeof MonetizationTypes];
