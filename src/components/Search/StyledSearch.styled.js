import styled from "styled-components";

export const StyledSearch = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border: 1px solid #797777;
  border-radius: 13px;

  &::placeholder {
    font-size: 16px;
    letter-spacing: 0;
    color: #797777;
  }
  &:focus {
    outline: none;
  }
`;
