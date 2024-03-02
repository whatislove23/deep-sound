import PropTypes from "prop-types";
import { StyledLogoLink } from "./StyledLogoLink.styled";

function LogoLink({ className, ...restProps }) {
  return (
    <StyledLogoLink {...restProps} className={className}>
      DeedSound
    </StyledLogoLink>
  );
}

export default LogoLink;

LogoLink.propTypes = {
  className: PropTypes.string,
};
