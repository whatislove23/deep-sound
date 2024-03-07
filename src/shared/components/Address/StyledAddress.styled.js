// import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledAddress = styled.address`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 0 0 0 91px;
  font-style: normal;

  &.footer-address {
    color: var(--secondary-text);
    flex-direction: column;
    row-gap: 16px;
    margin: 0;
  }

  p {
    margin-left: ${(props) => (props.$section === "footer" ? 0 : "84px")};
    color: var(--secondary-text);
  }
`;
