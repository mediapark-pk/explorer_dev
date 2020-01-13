export const getRandomDecimal = (min: number, max: number, fixed: number): number => {
  return +(Math.random() * (max - min) + min).toFixed(fixed);
};
