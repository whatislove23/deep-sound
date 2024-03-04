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
    margin-top: 90px; 
    width: 440px;
    font-size: 20px;
    line-height: 24px;
  }
`;
