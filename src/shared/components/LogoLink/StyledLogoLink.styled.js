import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLogoLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--secondary-text);

  &.header-logo-link {
    color: var(--main-text);
  }
`;
