export const Time = {
  DAY: 'day',
  WEEK: 'week',
};

export type Time = (typeof Time)[keyof typeof Time];
