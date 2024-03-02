import React from "react";
import PropTypes from "prop-types";

import {
  StyledCardItem,
  StyledCardButton,
  StyledOldPrice,
  StyledPrice,
  StyledDiscount,
  StyledHeartButton,
} from "./StyledCardItem.styled";
import Stars from "../Stars/Stars";

function CardItem({
  brand,
  model,
  product_type,
  img_card,
  rate,
  price,
  promo_price,
  color,
  new_arrive,
  accessories,
  isFav,
}) {
  return (
    <StyledCardItem>
      {(promo_price || new_arrive) && (
        <StyledDiscount newArrive={new_arrive}>
          {new_arrive ? "New" : `-$ ${price - promo_price}`}
        </StyledDiscount>
      )}
      <StyledHeartButton>
        {isFav ? (
          <svg
            width="20"
            height="18"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4683 9.02857L10.5048 15.0033C10.1094 15.3992 9.57326 15.6216 9.01421 15.6216C8.45515 15.6216 7.91898 15.3992 7.52361 15.0033L1.56016 9.02962C1.06719 8.54012 0.675606 7.95791 0.407872 7.3164C0.140138 6.6749 0.00153259 5.98674 1.26381e-05 5.29144C-0.00150732 4.59613 0.134088 3.90737 0.399015 3.2647C0.663941 2.62202 1.05298 2.0381 1.5438 1.54644C2.03462 1.05478 2.61755 0.665077 3.25912 0.399697C3.9007 0.134317 4.58828 -0.0015099 5.2824 1.26597e-05C5.97652 0.00153521 6.6635 0.140378 7.30391 0.408569C7.94432 0.676761 8.52554 1.06902 9.01421 1.56283C10.0068 0.593305 11.3407 0.05454 12.727 0.0632412C14.1134 0.0719424 15.4404 0.627409 16.4208 1.60931C17.4012 2.59122 17.9559 3.92049 17.9648 5.30918C17.9736 6.69787 17.436 8.03416 16.4683 9.02857Z"
              fill="#F97373"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4683 10.0286L11.5048 16.0033C11.1094 16.3992 10.5733 16.6216 10.0142 16.6216C9.45515 16.6216 8.91898 16.3992 8.52361 16.0033L2.56016 10.0296C2.06719 9.54012 1.67561 8.95791 1.40787 8.3164C1.14014 7.6749 1.00153 6.98674 1.00001 6.29144C0.998493 5.59613 1.13409 4.90737 1.39901 4.2647C1.66394 3.62202 2.05298 3.0381 2.5438 2.54644C3.03462 2.05478 3.61755 1.66508 4.25912 1.3997C4.9007 1.13432 5.58828 0.99849 6.2824 1.00001C6.97652 1.00154 7.6635 1.14038 8.30391 1.40857C8.94432 1.67676 9.52554 2.06902 10.0142 2.56283C11.0068 1.5933 12.3407 1.05454 13.727 1.06324C15.1134 1.07194 16.4404 1.62741 17.4208 2.60931C18.4012 3.59122 18.9559 4.92049 18.9648 6.30918C18.9736 7.69787 18.436 9.03416 17.4683 10.0286Z"
              stroke="#303030"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </StyledHeartButton>
      <div className="img_wrapper">
        <img className="product_img" src={img_card} alt={model} />
        <StyledCardButton>Add to cart</StyledCardButton>
      </div>
      <h3>{model}</h3>
      {promo_price && <StyledOldPrice>$ {price}</StyledOldPrice>}
      <div className="price_rating_wrapper">
        <StyledPrice>$ {promo_price || price}</StyledPrice>
        <Stars className="stars" rating={rate} />
      </div>
    </StyledCardItem>
  );
}

CardItem.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  product_type: PropTypes.string,
  img_card: PropTypes.string,
  rate: PropTypes.number,
  price: PropTypes.number,
  promo_price: PropTypes.number,
  color: PropTypes.string,
  new_arrive: PropTypes.bool,
  accessories: PropTypes.arrayOf(PropTypes.string),
  isFav: PropTypes.bool,
};

export default CardItem;
