export const capitaliseFirstLetter = (string: string) => {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
};

export const classNames = (classes: string[]) => {
  return classes.filter(Boolean).join(" ").trim();
};
