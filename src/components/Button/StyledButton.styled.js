import styled, { css } from "styled-components";

export const btn = css`
  width: 630px;
  height: 48px;
  background-color: var(--secondary-bgcolor);
  color: var(--secondary-text);
  border-radius: 30px;
  border: none;
  appearance: none;
  outline: none;
  border: 0.5px solid var(--secondary-bgcolor);
  &:hover {
    cursor: pointer;
    color: var(--main-text);
    background-color: var(--bg-light-gray);
    &:active {
      cursor: auto;
      background-color: var(--border);
      color: var(--secondary-text);
    }
    &:disabled {
      color: var(--secondary-text);
      background-color: var(--disabled-button);
    }
  }
`;
export const StandartBtnDark = styled.button`
  ${btn}
`;
export const StandartBtnLight = styled(StandartBtnDark)`
  background-color: var(--main-bgcolor);
  color: var(--main-text);
`;
export const StandartBtnYellow = styled.button`
  border: none;
  appearance: none;
  outline: none;
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
