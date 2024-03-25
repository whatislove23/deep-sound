import styled from "styled-components";

export const StyledProductCard = styled.section`
  margin: 40px 0 64px;
`;

export const StyledProductCardWrapper = styled.div`
  background-color: rgba(235, 235, 235, 0.5);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const StyledProductCardHeader = styled.header`
  .header_menu {
    display: flex;
    gap: 72px;
  }

  .header_link {
    font-size: 20px;
    line-height: 1.5;
    color: var(--text-black70);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 2px;
      background-color: var(--text-black70);
      opacity: 0;
      transition: opacity ease-in-out 0.5s;
    }

    &:hover::after {
      opacity: 1;
    }
  }
`;

export const StyledProductCardInner = styled.div`
  display: flex;
  gap: 50px;
`;

export const StyledProductCardSliders = styled.div`
  flex: 0 0 524px;
  width: 524px;
`;

export const StyledProductCardSlide = styled.img``;

export const StyledProductCardSlideSmall = styled.img`
  width: 98px;
`;

export const StyledProductCardBox = styled.div`
  display: flex;
  gap: 25px;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 0.5px solid var(--secondary-bgcolor);
`;

export const StyledProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 239px;
  gap: 8px;
`;

export const StyledProductCardNewLabel = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: var(--main-text);
  border: 0.5px solid var(--main-text);
  background-color: var(--yellow-pushed);
  border-radius: 13px;
  text-align: center;
  width: 71px;
  height: 20px;
`;

export const StyledProductCardName = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--text-black70);
`;

export const StyledProductCardCategory = styled.p`
  font-size: 44px;
  line-height: 1;
  color: var(--text-black70);
`;

export const StyledProductCardPrice = styled.div`
  .old_price {
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
    color: var(--red-caption);
    text-decoration: line-through;
  }

  .price {
    font-weight: 500;
    font-size: 64px;
    line-height: 1.2;
    color: var(--secondary-bgcolor);
  }
`;

export const StyledProductCardCode = styled.p`
  font-size: 16px;
  line-height: 1.25;
  color: var(--secondary-bgcolor);
  align-self: flex-end;
`;

export const StyledProductCardColor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;

  p {
    font-size: 28px;
    line-height: 1.2;
    color: var(--secondary-bgcolor);
  }

  .color_list {
    display: flex;
    gap: 24px;
  }
`;

export const StyledProductCardColorItem = styled.li`
  width: 46px;
  height: 46px;
  border-radius: 100%;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: ${({ $color }) => $color};
  transition: border-color ease-in-out 0.5s;

  &:hover {
    border-color: var(--text-black70);
  }
`;
