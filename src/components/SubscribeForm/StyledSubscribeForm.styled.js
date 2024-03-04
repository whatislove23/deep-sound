import styled from "styled-components";
import "../../stylesheet/fonts.css";
import bg from "../../assets/images/SubscribeBG.jpeg";
import Arrow from "../../assets/right-arrow.svg";
import Button from "../Button/Button";

export const StyledSubscribeFormSection = styled.section`
  height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${bg});
  /* filter: contrast(350%); */
  background-size: cover;
  background-position: center;
  padding-top: 80px;
`;
export const StyledFormContainer = styled.div`
  // (Container)
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: var(--secondary-text);
    font-size: 48px;
    text-align: center;
    font-weight: 400;
    line-height: 57.6px;
  }
  h3 {
    color: var(--secondary-text);
    font-size: 28px;
    text-align: center;
    font-weight: 400;
    margin-top: 16px;
    line-height: 33.6px;
  }
`;
export const StyledForm = styled.form`
  height: 48px;
  max-width: 630px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding: 8px 8px 8px 24px;
  background-color: var(--main-bgcolor);
  border-radius: 13px;
  display: flex;
  align-items: center;
`;
export const StyledEmailInput = styled.input`
  font-size: 20px;
  width: 100%;
  color: var(--main-text);
  appearance: none;
  border: none;
  outline: none;
  background-color: var(--main-bgcolor);
  ::placeholder {
    font-size: 20px;
    color: var(--text-light-gray);
  }
`;
export const StyledFormButton = styled(Button)`
  span {
    font-size: 16px;
    color: var(--main-text);
    width: 104px;
  }
`;
