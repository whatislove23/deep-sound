import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import {
  StyledProductCard,
  StyledProductCardCategory,
  StyledProductCardCode,
  StyledProductCardColor,
  StyledProductCardContent,
  StyledProductCardHeader,
  StyledProductCardInner,
  StyledProductCardName,
  StyledProductCardNewLabel,
  StyledProductCardPrice,
  StyledProductCardWrapper,
  StyledProductCardBox,
  StyledProductCardColorItem,
} from "./StyledProductCard.styled";
import Container from "../Container/Container";
import Stars from "../Stars/Stars";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import ProductCardSlider from "../ProductCardSlider/ProductCardSlider";

function ProductCard({ product }) {
  const {
    model,
    category,
    code,
    new_arrive,
    rate,
    price,
    promo_price,
    reviewsCount,
    items,
  } = product;

  const location = useLocation();
  const path = location.pathname;

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  const colorElements = items.map((item) => (
    <StyledProductCardColorItem
      key={item.color}
      className="color_item"
      $color={item.colorHex}
    />
  ));

  return (
    <StyledProductCard>
      <Container>
        <StyledProductCardWrapper>
          <StyledProductCardHeader>
            <nav>
              <ul className="header_menu">
                <li>
                  <HashLink
                    smooth
                    to={`${path}#accessories`}
                    scroll={(el) => scrollWithOffset(el, 150)}
                    className="header_link"
                  >
                    Accessories
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={`${path}#description`}
                    scroll={(el) => scrollWithOffset(el, 150)}
                    className="header_link"
                  >
                    Description
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={`${path}#characteristics`}
                    scroll={(el) => scrollWithOffset(el, 150)}
                    className="header_link"
                  >
                    Сharacteristics
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={`${path}#reviews`}
                    scroll={(el) => scrollWithOffset(el, 150)}
                    className="header_link"
                  >
                    {`Reviews(${reviewsCount})`}
                  </HashLink>
                </li>
              </ul>
            </nav>
          </StyledProductCardHeader>
          <StyledProductCardInner>
            <ProductCardSlider slides={items[0]?.imgUrls} />
            <div>
              <StyledProductCardBox>
                <StyledProductCardContent>
                  {new_arrive && (
                    <StyledProductCardNewLabel>New</StyledProductCardNewLabel>
                  )}
                  <StyledProductCardName>{model}</StyledProductCardName>
                  <StyledProductCardCategory>
                    {category}
                  </StyledProductCardCategory>
                  <Stars className="stars" rating={rate} width={34} gap={6} />
                  <StyledProductCardPrice>
                    {promo_price && <p className="old_price">$ {price}</p>}
                    <p className="price">
                      $ {promo_price ? promo_price : price}
                    </p>
                  </StyledProductCardPrice>
                </StyledProductCardContent>
                <StyledProductCardCode>
                  Product code : {code}
                </StyledProductCardCode>
              </StyledProductCardBox>
              <StyledProductCardColor>
                <p>Color:</p>
                <ul className="color_list">{colorElements}</ul>
              </StyledProductCardColor>
              <Button btnType="dark">Button</Button>
            </div>
          </StyledProductCardInner>
        </StyledProductCardWrapper>
      </Container>
    </StyledProductCard>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};
