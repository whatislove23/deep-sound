import { styled } from "styled-components";

export const StyledCartModal = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 480px;
    height: 958px;
    border: 0.5px solid var(--secondary-bgcolor);
    background: var(--main-bgcolor);
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
    &>div {
        padding: 0 28px;
    }
`;

export const StyledCartModalFooter = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 192px;
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