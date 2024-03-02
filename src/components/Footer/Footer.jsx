import SocialList from "../../shared/components/SocialList/SocialList";
import Address from "../../shared/components/Address/Address";
import {
  StyledFooter,
  StyledFooterContainer,
  StyledInfoWrapper,
  StyledSubFooterContainer,
} from "./StyledFooter.styled";
import icons from "../../assets/icons.svg";
import NaviLink from "../../shared/components/NaviLink/NaviLink";
import LogoLink from "../../shared/components/LogoLink/LogoLink";

function Footer() {
  return (
    <StyledFooter id="footer">
      <StyledFooterContainer>
        <StyledInfoWrapper>
          <LogoLink to="/" />
          <SocialList className="footer-social" />
        </StyledInfoWrapper>
        <StyledInfoWrapper className="address-wrapper">
          <h3>Address:</h3>
          <Address className="footer-address" sectionName="footer" />
        </StyledInfoWrapper>
        <StyledInfoWrapper className="service-wrapper">
          <h3>Customer service:</h3>
          <ul>
            <li>
              <NaviLink to="" className="info-link">
                Shipping Information
              </NaviLink>
            </li>
            <li>
              <NaviLink to="" className="info-link">
                Returns & Exhanges
              </NaviLink>
            </li>
            <li>
              <NaviLink to="" className="info-link">
                F.A.Q
              </NaviLink>
            </li>
          </ul>
        </StyledInfoWrapper>
        <StyledInfoWrapper className="info-wrapper">
          <h3>Other Information:</h3>
          <ul>
            <li>
              <NaviLink to="" className="info-link">
                Privacy Policy
              </NaviLink>
            </li>
            <li>
              <NaviLink to="" className="info-link">
                Term Of Use
              </NaviLink>
            </li>
            <li>
              <NaviLink to="" className="info-link">
                Acessability
              </NaviLink>
            </li>
          </ul>
        </StyledInfoWrapper>
      </StyledFooterContainer>
      <StyledSubFooterContainer>
        <p>2024 Audioshop</p>
        <ul>
          <li className="subfooter-mastercard">
            <svg style={{ width: "40px", height: "32px" }}>
              <use href={icons + "#mastercard"}></use>
            </svg>
          </li>
          <li className="subfooter-visa">
            <svg style={{ width: "70px", height: "23px" }}>
              <use href={icons + "#visa"}></use>
            </svg>
          </li>
          <li className="subfooter-paypal">
            <svg style={{ width: "88px", height: "25px" }}>
              <use href={icons + "#paypal"}></use>
            </svg>
          </li>
          <li className="subfooter-payoneer">
            <svg style={{ width: "87px", height: "25px" }}>
              <use href={icons + "#payoneer"}></use>
            </svg>
          </li>
        </ul>
      </StyledSubFooterContainer>
    </StyledFooter>
  );
}

export default Footer;
