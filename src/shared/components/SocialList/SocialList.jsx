import { NavLink } from "react-router-dom";
import { StyledSocialList } from "./StyledSocialList.styled";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import PropTypes from "prop-types";

function SocialList({ className }) {
  return (
    <StyledSocialList className={className}>
      <li>
        <NavLink
          to="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon-social" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="icon-social" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon-social" />
        </NavLink>
      </li>
    </StyledSocialList>
  );
}

export default SocialList;

SocialList.propTypes = {
  className: PropTypes.string,
};
