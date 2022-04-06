import { PlaceholderCallback } from "./types/global";

export const capitaliseFirstLetter = (string: string) => {
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
