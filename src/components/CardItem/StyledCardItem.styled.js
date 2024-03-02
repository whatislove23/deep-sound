import styled from "styled-components";
import Button from "../Button/Button";

export const StyledCardItem = styled.div`
  position: relative;
  width: 305px;
  height: 328px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h3 {
    color: var(--main-text);
    font-weight: 500;
    max-height: 40px;
    width: 100%;
    font-size: 14px;
    line-height: 21px;
  }
  .img_wrapper {
    position: relative;
    height: 208px;
    width: 100%;
    border: 0.5px solid var(--border);
    overflow: hidden;
    transition: 0.15s ease-in all;
    img {
      width: 100%;
      height: 208px;
      transition: 0.15s ease-in all;
    }
  }
  .price_rating_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .stars {
    opacity: 0;
  }
  &:hover .stars {
    opacity: 1;
  }
  &:hover .img_wrapper {
    height: 256px;
  }
  &:hover .product_img {
    transform: scale(1.5);
    transition: 0.15s ease-in all;
  }
  &:hover button {
    opacity: 1;
  }
`;
export const StyledCardButton = styled(Button)`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  width: 273px;
  height: 32px;
  border: 0.5px solid var(--main-text);
  border-radius: 30px;
  background-color: var(--disabled-button);
  color: var(--main-text);
  font-weight: 500;
  font-size: 14px;
`;
export const StyledHeartButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 8px;
  right: 8px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: var(--main-bgcolor);
  transition: 0.15s ease-in all;
  display: flex;
  opacity: 0;
  align-items: center;
  border: none;
  appearance: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledOldPrice = styled.p`
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 500;
  text-decoration: line-through;
  color: var(--red-caption);
`;
export const StyledPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--main-text);
`;
export const StyledDiscount = styled.p`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
  width: 56px;
  height: 16px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 13px;
  text-align: center;
  line-height: 14.4px;
  color: var(--main-text);
  background-color: ${(props) =>
    props.$newarrive ? "var(--yellow-pushed)" : "var(--main-bgcolor)"};
  border: 0.5px solid var(--main-text);
`;
