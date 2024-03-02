import styled from "styled-components";
import Mastercard from '../../../assets/cards/Mastercard.svg';
import Visa from '../../../assets/cards/Visa.svg';
import PayPal from '../../../assets/cards/PayPal.svg';
import Payoneer from '../../../assets/cards/Payoneer.svg';

export const StyledOrderCheckout = styled.div`
    &>div {
        border: var(--text-light-gray) solid 1px;
        width: 584px;
        color: var(--main-text);
        display: flex;
        flex-direction: column;
        padding: 24px 32px 16px 32px;
        font-weight: 500;
        cursor: default;
        &>div {
            width: 100%;
            font-size: 32px;
            line-height: 32px;
            display: flex;
            justify-content: space-between; 
        }
        &>span {
            margin-top: 8px; 
            font-weight: 400; 
            font-size: 14px; 
            line-height: 14px;
        }
        &>section {
            margin-top: 40px;  
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        &>section button {
            padding: 12px 24px;
            font-size: 20px;
            line-height: 20px;
        }
    }
    &>span {
        border: var(--text-light-gray) solid 1px;
        border-top: none;
        display: flex;
        justify-content: space-between;
        padding: 16px 32px;
    
        & img {
            width: 88px;
            height: 32px;
        }
    }
`;

export const StyledMastercard = styled.svg`
    background-image: url(${Mastercard});
    background-size: cover;
    background-repeat: no-repeat;
    width: 88px;
    height: 32px;
    display: block;
`;

export const StyledVisa = styled.svg`
    background-image: url(${Visa});
    background-size: cover;
    background-repeat: no-repeat;
    width: 88px;
    height: 32px;
    display: block;
`;

export const StyledPayPal = styled.svg`
    background-image: url(${PayPal});
    background-size: cover;
    background-repeat: no-repeat;
    width: 88px;
    height: 32px;
    display: block;
`;

export const StyledPayoneer = styled.svg`
    background-image: url(${Payoneer});
    background-size: cover;
    background-repeat: no-repeat;
    width: 88px;
    height: 32px;
    display: block;
`;