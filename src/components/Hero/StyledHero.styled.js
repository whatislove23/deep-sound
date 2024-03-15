import styled from "styled-components";
import { StyledNavLinkButton, StandartBtnLight } from "../Button/StyledButton.styled";
import noise from "../../assets/noise-bg.png"

export const StyledHero = styled.section`
  position: relative;
  color: #fff;
  height: calc(100vh - 179px);

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    background-image: url(${noise});
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledHeroWrapper = styled.div`
  position: absolute;
  max-width: 1280px;
  width: 100%;
  bottom: 64px;
  left: 50%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  transform: translateX(-50%);
  z-index: 2;

  h2 {
    max-width: 843px;
    font-size: 64px;
    font-weight: 800;
    line-height: 1.2;
    white-space: pre-wrap
  }

`;

export const StyledHeroBtn = styled(StyledNavLinkButton)`
  ${StandartBtnLight}
  width: 273px;
  height: 32px;
  margin: 0;
`;
