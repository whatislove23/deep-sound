import { styled } from "styled-components";
import CloseDark from '../../assets/CloseDark.svg';
import CloseLight from '../../assets/Close.svg';

export const StyledCancelLight = styled.button`
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

export const StyledCancelDark = styled.button`
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