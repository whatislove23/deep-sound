import {
  StyledContainer,
  StyledDropdownMenu,
} from "./StyledDropdownMenu.styled";
import PropTypes from "prop-types";

function DropdownMenu({ nameDataMenu, dropdownMenuRef, isDropdownOpen }) {
  console.log("isDropdownOpen: ", isDropdownOpen);
  return (
    <StyledDropdownMenu
      ref={dropdownMenuRef}
      className={isDropdownOpen ? "open-menu" : "close-menu"}
    >
      <StyledContainer>
        <h3>{nameDataMenu}</h3>
        <ul>
          <li>Accuphase</li>
          <li>Audioquest</li>
          <li>Adcom</li>
          <li>Audio Technica</li>
          <li>ATR Magnetics</li>
          <li>Audiolab</li>
          <li>Cambridge</li>
          <li>Cyris Audio</li>
          <li>Dual</li>
          <li>Elac</li>
          <li>Hi-Fi Rose</li>
          <li>Integra</li>
          <li>KEF</li>
          <li>KLH</li>
          <li>Klipsh</li>
          <li>Klipsh Heritage</li>
          <li>Leak</li>
          <li>Luxman</li>
        </ul>
      </StyledContainer>
    </StyledDropdownMenu>
  );
}

export default DropdownMenu;

DropdownMenu.propTypes = {
  dropdownMenuRef: PropTypes.object,
  nameDataMenu: PropTypes.string,
  isDropdownOpen: PropTypes.bool,
};
