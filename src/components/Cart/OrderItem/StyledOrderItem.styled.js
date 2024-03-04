import { styled } from "styled-components";
import ArrowUp from '../../../assets/ArrUp.svg';
import ArrowDown from '../../../assets/ArrDown.svg';
import Delete from '../../../assets/Delete.svg';

export const StyledOrderItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
    height: 152px;
    width: 100%;
    color: var(--main-text);
    line-height: 1.6;
    font-size: 16px;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    & img {
        max-width: 128px;
        max-height: 128px;
        display: block;
    }
    & input::-webkit-outer-spin-button,
    & input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &>section {
        display: flex;
        flex-direction: column;
        align-items: end;
        & span {
            position: relative;
        }
        & span input {
            width: 64px; 
            height: 32px; 
            padding: 6px 8px 6px 8px;
            &:focus {
                outline: none;
            }
        }
        & span i {
            position: absolute;
            top: 0;
            right: 5.33px;
            display: flex;
            flex-direction: column;
        }
    }
`;

export const StyledArrowUp = styled.svg`
    background-image: url(${ArrowUp});
    background-size: cover;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    display: block;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
    &:focus-visble {
        border: 2px solid var(--main-text);
    }
`;

export const StyledArrowDown = styled.svg`
    background-image: url(${ArrowDown});
    background-size: cover;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    display: block;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
    &:focus-visble {
        border: 2px solid var(--main-text);
    }
`;

export const StyledDeleteButton = styled.button`
    background-image: url(${Delete});
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    width: 14.67px;
    height: 14.67px;
    margin: 76.67px 0 28.67px 0;
    transition: all 0.1s ease;
    &:hover {
        transform: translateY(-1px);
    }
    &:active {
        transform: translateY(2px);
    }
    &:focus-visible {
        outline-offset: 5px;
    }
`;