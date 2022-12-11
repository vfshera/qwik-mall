export const slugify = (value: string): string => {
  return value
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, "-"); // separator
};

export const sentenseCase = (words: string): string => {
  return words
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

export const getUSD = (num: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);
};
