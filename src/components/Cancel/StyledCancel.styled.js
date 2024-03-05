import styled, { css } from "styled-components";
import CloseDark from '../../assets/CloseDark.svg';
import CloseLight from '../../assets/Close.svg';

export const StyledCancelLight = css`
    background-image: url(${CloseLight});
    background-size: cover;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    display: block;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
    &:focus-visible {
        border: none;
        outline: 2px solid var(--secondary-text);
        outline-offset: 2px;
    }
`;

export const StyledCancelDark = css`
    background-image: url(${CloseDark});
    background-size: cover;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    display: block;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
    &:focus-visible {
        border: none;
        outline: 2px solid var(--secondary-text);
        outline-offset: 2px;
    }
`;

export const StyledCancelButton = styled.button`
  ${StyledCancelDark};
  ${({ $btnType }) => {
    let result = '';
    switch ($btnType) {
      case "light":
        result = StyledCancelLight;
        break;
      case "dark":
        result = StyledCancelDark;
        break;
      default:
        result = StyledCancelDark;
        break;
    }
    return result;
  }}
`;
