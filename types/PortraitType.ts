import { StaticImageData } from "next/image";

export type PortraitType = {
  width: string;
  height: string;
  src: StaticImageData;
  alt: string;
  objectFit: string;
};
