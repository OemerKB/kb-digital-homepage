import React from "react";
import { RainbowButton, RainbowButtonProps } from "./rainbow-button";

export const Button = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  (props, ref) => {
    return <RainbowButton ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export type { RainbowButtonProps as ButtonProps };