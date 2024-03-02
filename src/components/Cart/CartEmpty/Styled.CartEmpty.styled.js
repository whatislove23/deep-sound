import styled from "styled-components";

export const StyledCartEmpty = styled.div`
  display: flex;
  flex-direction:  column;
  align-items: center;
  margin-top: 251px;
  margin-bottom: 239px;
  & div {
    font-size: 58px; 
    line-height: 69.6px; 
    color: var(--main-text);
  }
  & button {
    margin-top: 120px; 
    background-color: var(--secondary-bgcolor);
    color: var(--secondary-text);
    padding: 12px 109px; 
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    border: 0.5px solid var(--secondary-bgcolor);
  }
`;
