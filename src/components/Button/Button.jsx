import PropTypes from "prop-types";
import { StyledButton } from "./StyledButton.styled";

export default function Button({ children, btnType = "light", ...restProps }) {
  return (
    <StyledButton $btnType={btnType} {...restProps}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  btnType: PropTypes.string,
};
