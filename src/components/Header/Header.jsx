import Address from "../../shared/components/Address/Address";
import SocialList from "../../shared/components/SocialList/SocialList";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLayerContainer,
} from "./StyledHeader.styled";
import NavHeader from "../NavHeader/NavHeader";
import LogoLink from "../../shared/components/LogoLink/LogoLink";
import Search from "../Search/Search";
import NaviLink from "../../shared/components/NaviLink/NaviLink";
import { NavLink } from "react-router-dom";
import icons from "../../assets/icons.svg";

function Header(props) {
  return (
    <StyledHeader>
      <div className="layer">
        <StyledLayerContainer>
          <p className="name-shop">Audioshop</p>
          <Address />
          <SocialList />
        </StyledLayerContainer>
      </div>
      <StyledHeaderContainer>
        <LogoLink to="/" className="header-logo-link" />
        <Search />
        <NaviLink to="tel:+1892115963708" className="header-link-tel">
          +18 (921) 159 637 08
        </NaviLink>
        <div className="lang-wrapper">
          <button type="button">EN</button>
          <button type="button">UA</button>
        </div>
        <ul className="user-param-nav">
          <li>
            <NavLink to="/">
              <svg style={{ width: "20px", height: "25px", fill: "#303030" }}>
                <use href={icons + "#user"}></use>
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <svg style={{ width: "22px", height: "20px" }}>
                <use href={icons + "#fav-heart"}></use>
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <svg 
                onClick={props.openModal}
                style={{ width: "22.5px", height: "23.3px", fill: "#303030" }}
              >
                <use href={icons + "#basket"}></use>
              </svg>
            </NavLink>
          </li>
        </ul>
        <NavHeader />
      </StyledHeaderContainer>
    </StyledHeader>
  );
}

export default Header;
