import { StyledNaviLink } from "./StyledNaviLink.styled";
import PropTypes from "prop-types";

function NaviLink({ children, className, ...restProps }) {
  return (
    <StyledNaviLink {...restProps} className={className}>
      {children}
    </StyledNaviLink>
  );
}

export default NaviLink;

NaviLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
