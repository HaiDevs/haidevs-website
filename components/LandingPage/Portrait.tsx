import React, { FC } from "react";
import Image from "next/image";
import type { PortraitType } from '../../types/PortraitType';

export const Portrait: FC<PortraitType> = ({ width, height, src, alt}) => {
  return (
    <Image
      width={width}
      height={height}
      objectFit="cover"
      src={src}
      alt={alt}
    />
  );
};

export default Portrait;
