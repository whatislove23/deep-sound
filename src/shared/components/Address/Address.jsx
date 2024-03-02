import { Link } from "react-router-dom";
import NaviLink from "../NaviLink/NaviLink";
import { StyledAddress } from "./StyledAddress.styled";
import PropTypes from "prop-types";

function Address({ className, sectionName }) {
  return (
    <StyledAddress className={className}>
      {/* <p>Bulliville str., North Island, USA</p> */}
      <Link to="https://maps.app.goo.gl/sXyEugjbwynMx1YE8" target="_blank">
        Bulliville str., North Island, USA
      </Link>
      <NaviLink to="tel:+1892115963708" $section={sectionName}>
        +18 (921) 159 637 08
      </NaviLink>
      <NaviLink
        to="mailto:Audioshop@gmail.com"
        target="_blank"
        $section={sectionName}
      >
        Audioshop@gmail.com
      </NaviLink>
    </StyledAddress>
  );
}

export default Address;

Address.propTypes = {
  sectionName: PropTypes.string,
  className: PropTypes.string,
};
