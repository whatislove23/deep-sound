import React from "react";
import {
  StandartBtnDark,
  StandartBtnLight,
  StandartBtnYellow,
} from "./StyledButton.styled";

export default function Button({ children, btnType = "light", ...restProps }) {
  let ButtonComponent;
  switch (btnType) {
    case "dark":
      ButtonComponent = StandartBtnDark;
      break;
    case "light":
      ButtonComponent = StandartBtnLight;
      break;
    case "yellow":
      ButtonComponent = StandartBtnYellow;
      break;
    default:
      // Default to dark button if type is not provided or invalid
      ButtonComponent = StandartBtnLight;
  }

  return <ButtonComponent {...restProps}>{children}</ButtonComponent>;
}
