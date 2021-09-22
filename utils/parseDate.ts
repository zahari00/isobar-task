export const parseDate = (num: number) => {
  const date = new Date(num * 1000);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};
