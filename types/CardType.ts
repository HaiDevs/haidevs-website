import { ReactElement } from "react";

export type CardType = {
  heading: string;
  description: string;
  icon: ReactElement | string | any;
  borderBottomWidth?: { base: number; sm: number; md: number; lg: number; } | number;
  borderTopWidth?: { base: number; sm: number; md: number; lg: number; } | number;
  borderLeftWidth?: { base: number; sm: number; md: number; lg: number; } | number;
  borderRightWidth?: { base: number; sm: number; md: number; lg: number; } | number;
  borderWidth?: { base: number; sm: number; md: number; lg: number; } | number;
  };
  