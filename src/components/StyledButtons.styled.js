import styled from "styled-components";

export const StyledBlackButtonTemplate = styled.button`
    border-radius: 30px;
    transition: all 0.2s ease;
    background-color: var(--secondary-bgcolor);
    border: 0.5px solid var(--secondary-bgcolor);
    color: var(--secondary-text);
    &:hover {
        background-color: #D7D7D7;
        color: var(--main-text);
        border: 0.5px solid var(--main-text);
    }
    &:active {
        background-color: #797777;
        color: var(--secondary-text);
        border: 0.5px solid var(--main-text);
    }
`;

export const StyledWhiteButtonTemplate = styled.button`
    border-radius: 30px;
    transition: all 0.2s ease;
    background-color: var(--secondary-text);
    color: var(--secondary-bgcolor);
    border: 0.5px solid var(--main-text);
    &:hover {
        background-color: #D7D7D7;
        color: var(--main-text);
        border: 0.5px solid var(--main-text);
    }
    &:active {
        background-color: #797777;
        color: var(--secondary-text);
        border: 0.5px solid var(--main-text);
    }
`;