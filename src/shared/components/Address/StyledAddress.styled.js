// import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledAddress = styled.address`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 0 0 0 82px;
  font-style: normal;

  &.footer-address {
    color: var(--secondary-text);
    flex-direction: column;
    row-gap: 16px;
    margin: 0;
  }

  p {
    width: 100%;
    max-width: 244px;
  }
`;

// export const StyledLink = styled(NavLink)`
//   //replace this component to shared!!
//   display: block;
//   width: 197px;
//   margin-left: ${(props) => (props.$section === "footer" ? 0 : "22px")};
//   text-align: ${(props) => (props.$section === "footer" ? "start" : "center")};
//   text-decoration: none;
//   color: var(--secondary-text);

//   &.info-link {
//     width: 100%;
//     margin: 0;
//     text-align: start;
//   }
// `;
