import { StyledContainer } from "./StyledContainer.styled";
import PropTypes from "prop-types";

function Container({ children, ...restProps }) {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
