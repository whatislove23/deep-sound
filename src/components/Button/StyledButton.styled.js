import styled, { css } from "styled-components";

export const StandartBtnDark = css`
  width: 630px;
  height: 48px;
  background-color: var(--secondary-bgcolor);
  color: var(--secondary-text);
  font-weight: 500;
  border-radius: 30px;
  border: none;
  appearance: none;
  outline: none;
  border: 0.5px solid var(--secondary-bgcolor);
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    color: var(--main-text);
    background-color: #d7d7d7;
  }
  &:active {
    cursor: auto;
    background-color: var(--border);
    color: var(--secondary-text);
  }
  &:disabled {
    color: var(--secondary-text);
    background-color: var(--disabled-button);
  }
  &:focus-visible {
    border: 3px solid #d7d7d7;
    outline: 2px solid var(--secondary-bgcolor);
  }
`;
export const StandartBtnLight = css`
  background-color: var(--main-bgcolor);
  color: var(--main-text);
  &:focus-visible {
    border: 1px solid #797777;
    outline: 2px solid var(--secondary-bgcolor);
  }
`;
export const StandartBtnYellow = css`
  border: none;
  width: 136px;
  height: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--accent-yellow);
  &:hover {
    cursor: pointer;
    background-color: var(--yellow-hover);
  }
  &:active {
    cursor: auto;
    background-color: var(--yellow-pushed);
  }
  &:disabled {
    color: var(--secondary-text);
    background-color: var(--disabled-button);
  }
`;
export const StyledButton = styled.button`
  ${StandartBtnDark};
  ${({ $btnType }) => {
    let result = "";
    switch ($btnType) {
      case "light":
        result = StandartBtnLight;
        break;
      case "dark":
        result = StandartBtnDark;
        break;
      case "yellow":
        result = StandartBtnYellow;
        break;
      default:
        result = "";
        break;
    }
    return result;
  }}
`;
