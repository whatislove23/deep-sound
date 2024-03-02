import styled from "styled-components";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
import { btn } from "../Button/StyledButton.styled";
export const StyledNewArrives = styled(Container)`
  h2 {
    font-weight: 400;
    font-size: 48px;
    color: var(--main-text);
  }
  .items_container {
    margin: 64px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
  }
`;
export const StyledLinkShowMore = styled(NavLink)`
  ${btn}
  width: 414px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: var(--secondary-bgcolor);
  color: var(--secondary-text);
  font-size: 20px;
  /* line-height: 24;ß */
  font-weight: 500;
  border-radius: 30px;
  text-decoration: none;
`;
