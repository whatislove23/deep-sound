import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import NaviLink from "../NaviLink/NaviLink";
import { StyledAddress } from "./StyledAddress.styled";

function Address({ className, sectionName }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <StyledAddress className={className} $section={sectionName}>
      <Link to="https://maps.app.goo.gl/sXyEugjbwynMx1YE8" target="_blank">
        Bulliville str., North Island, USA
      </Link>
      {isDesktop ? (
        <p>+18 (921) 159 637 08</p>
      ) : (
        <NaviLink to="tel:+1892115963708" $section={sectionName}>
          +18 (921) 159 637 08
        </NaviLink>
      )}
      {sectionName === "footer" && (
        <NaviLink
          to="mailto:Audioshop@gmail.com"
          target="_blank"
          $section={sectionName}
        >
          Audioshop@gmail.com
        </NaviLink>
      )}
    </StyledAddress>
  );
}

export default Address;

Address.propTypes = {
  sectionName: PropTypes.string,
  className: PropTypes.string,
};
