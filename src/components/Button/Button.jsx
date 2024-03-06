import React from "react";
import { StyledButton } from "./StyledButton.styled";

export default function Button({ children, btnType = "light", ...restProps }) {
  return (
    <StyledButton $btnType={btnType} {...restProps}>
      {children}
    </StyledButton>
  );
}
