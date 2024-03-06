import styled from "styled-components";
import Container from "../Container/Container";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--main-bgcolor);
  z-index: 999;
`;

export const StyledLayerContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const StyledHeaderContainer = styled(Container)`
  //take out in a separate component
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px 80px;
  border-bottom: 0.5px solid #797777;
  position: relative;

  p {
    font-size: 16px;
    letter-spacing: 0;
    margin-left: 37px;
  }

  .lang-wrapper {
    width: 100%;
    max-width: 57px;
    display: flex;
    flex-direction: row;
    margin-left: 44px;
  }

  .lang-wrapper button {
    width: 100%;
    max-width: 28.5px;
    color: #d7d7d7;
    background-color: transparent;
  }

  .lang-wrapper button:first-child {
    border-right: 1px solid var(--main-text);
    padding-right: 4.5px;
    letter-spacing: 0;
    color: var(--main-text);
  }

  .user-param-nav {
    display: flex;
    flex-direction: row;
    column-gap: 16px;
    margin-left: 48px;
  }
  .user-param-nav li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }
`;
