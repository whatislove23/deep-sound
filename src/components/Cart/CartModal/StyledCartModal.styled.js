import { styled } from "styled-components";

export const StyledCartModal = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    width: 480px;
    height: 100vh;
    border: 0.5px solid var(--secondary-bgcolor);
    background: var(--main-bgcolor);
    transition: all 0.6s ease-in;
    &.opened {
        transform: translateX(0);
    }
    &.closed {
        transform: translateX(100%);
    }
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

export const StyledCartModalHeader = styled.header`
    padding: 0 28px;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid var(--main-text);
    &>h2 {
        font-weight: 400;
        line-height: 24px;
    }
`;

export const StyledCartModalEmpty = styled.div`
    display: flex; 
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 0 28px;
    &>span {
        margin-top: 296px;
        font-size: 40px;
        line-height: 40px;
    }
    &>button {
        margin-top: 120px;
        width: 256px;
        font-size: 20px;
        line-height: 24px;
    }
`;

export const StyledCartModalFilled = styled.div`
    display: flex; 
    flex-direction: column;
    margin-top: 24px;
    gap: 24px;
    height: calc(100vh - 192px - 72px - 24px - 40px);
    overflow-y: auto;
    &>div {
        padding: 0 16px 0 28px;
    }
`;

export const StyledCartModalFooter = styled.footer`
    width: 100%;
    height: 192px;
    margin-top: 40px;
    border-top: 0.5px solid var(--border);
    display: flex; 
    flex-direction: column;
    padding: 24px 28px;
    gap: 8px;
    &>h1 {
        display: flex; 
        justify-content: space-between;
        line-height: 32px;
        color: var(--main-text);
        font-weight: 500;
    }
`;