import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNaviLink = styled(NavLink)`
  width: 197px;
  margin-left: ${(props) => (props.$section === "footer" ? 0 : "22px")};
  text-align: ${(props) => (props.$section === "footer" ? "start" : "center")};
  text-decoration: none;
  color: var(--secondary-text);

  &.info-link {
    width: 100%;
    margin: 0;
    text-align: start;
  }

  &.header-link-tel {
    width: fit-content;
    color: var(--main-text);
    font-size: 16px;
    letter-spacing: 0;
    margin-left: 37px;
  }
`;
