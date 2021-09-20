export const parseDate = (num: number) => {
  const date = new Date(num * 1000);
  return new Intl.DateTimeFormat("en-GB").format(date);
};
