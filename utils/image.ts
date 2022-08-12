export const IMAGE_SIZE = 40;

export const preloadImage = () => {
  new Image(IMAGE_SIZE, IMAGE_SIZE).src = "/vercel.svg";
};
