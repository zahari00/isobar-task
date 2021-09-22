export const getImage = (id: number | string) => {
  return (+id % 10) + ".jpeg";
};
