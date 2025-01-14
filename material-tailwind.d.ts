import { IconButtonProps } from './node_modules/@material-tailwind/react/components/IconButton/index.d';
import { CardProps } from './node_modules/@material-tailwind/react/components/Card/index.d';
import { NavbarProps } from './node_modules/@material-tailwind/react/components/Navbar/index.d';
import { TypographyProps } from './node_modules/@material-tailwind/react/components/Typography/index.d';
// material-tailwind.d.ts
import {} from "@material-tailwind/react";

type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

declare module "@material-tailwind/react" {
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface InputProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface SelectProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TypographyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface NavbarProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface CardProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface IconButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  // more...
}
