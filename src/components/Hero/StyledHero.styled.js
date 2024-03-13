import styled from "styled-components";
import { StyledNavLinkButton, StandartBtnLight } from "../Button/StyledButton.styled";

export const StyledHero = styled.section`
  margin-top: 10px;
  position: relative;
  color: #fff;

  video {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

export const StyledHeroWrapper = styled.div`
  position: absolute;
  max-width: 1064px;
  width: 100%;
  top: 80px;
  left: 50%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transform: translateX(-50%);

  h2 {
    font-size: 48px;
    line-height: 1.2;
  }

  p {
    font-size: 20px;
    line-height: 1;
  }
`;

export const StyledHeroBtn = styled(StyledNavLinkButton)`
  ${StandartBtnLight}
  width: 273px;
  height: 32px;
  margin: 0;
`;
