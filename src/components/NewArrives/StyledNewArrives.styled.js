import styled from "styled-components";

import { StyledNavLinkButton } from "../Button/StyledButton.styled";
export const StyledNewArrives = styled.section`
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
export const StyledLinkShowMore = styled(StyledNavLinkButton)`
  width: 414px;
  height: 48px;
  font-size: 20px;
  /* line-height: 24;ß */
  font-weight: 500;
  border-radius: 30px;
`;
