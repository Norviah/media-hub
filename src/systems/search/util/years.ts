export const oldestYear = 1950 - 1;
const year = new Date().getFullYear() + 1;

export const validYears = Array.from(new Array(year - oldestYear), (_, i) => year - i);
