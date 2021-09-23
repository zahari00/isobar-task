export const parseDate = (
  num: number,
  monthFormat: "long" | "short" = "short"
) => {
  const date = new Date(num * 1000);
  
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: monthFormat,
    day: "2-digit",
  });
};
