import { PlaceholderCallback } from "./types/global";

export const capitaliseFirstLetter = (string?: string) => {
  if (!string) return "";
  return string && string.charAt(0).toUpperCase() + string.slice(1);
};

export const blurImage = async (url: string, callback: PlaceholderCallback) => {
  if (!url) return null;
  const { base64, img } = await callback(url, { size: 10 });

  return {
    src: img?.src,
    type: img?.type,
    blurDataURL: base64,
  };
};

export const generateId = (): string => {
  let arr = [];
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < letters.length; i++) {
    const randomLetter = Math.floor(Math.random() * letters.length);
    arr.push(letters[randomLetter]);
  }
  return arr.join("");
};
