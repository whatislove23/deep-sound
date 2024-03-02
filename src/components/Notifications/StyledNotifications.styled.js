import { styled } from "styled-components";
import Close from '../../assets/Close.svg';
import HeartRed from '../../assets/HeartRed.svg';
import HeartWhite from '../../assets/HeartWhite.svg';

export const StyledNotification = styled.div`
    background-color: #797777;
    border-radius: 13px;
    height: 48px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: fit-content;
    margin-bottom: 32px;
    color: var(--secondary-text);
    cursor: default;
    &>h4 {
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        color: var(--secondary-text);
    }
`;

export const StyledCloseButton = styled.button`
    background-image: url(${Close});
    background-size: cover;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    display: block;
    padding: 0;
    margin-left: 16px;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
`;

export const StyledUndoButton = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: var(--secondary-text);
    text-decoration: underline; 
    margin-left: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:active {
        transform: scale(0.9);
    };
`;

export const StyledHeartRed = styled.svg`
    background-image: url(${HeartRed});
    background-size: cover;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
    display: block;
`;

export const StyledHeartWhite = styled.svg`
    background-image: url(${HeartWhite});
    background-size: cover;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
    display: block;
`;