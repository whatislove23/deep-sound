import styled from "styled-components";

export const StyledCartFilled = styled.div`
    display: flex;
    justify-content: space-between; 
    margin-top: 64px; 
    margin-bottom: 80px;
    ::-webkit-scrollbar {
        width: 8px;
        background: #D7D7D7;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        max-height: 18px;
        background: var(--main-text);
        border-radius: 5px;
        border: 2px solid #D7D7D7;
        &:hover {
            background: var(--bg-light-gray);
        }
        &:active {
            background: var(--main-text);
        }
}
`;
