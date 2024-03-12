import { Link } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import Container from "../Container/Container";
import {
  StyledLinkShowMore,
  StyledNewArrives,
} from "../NewArrives/StyledNewArrives.styled";
const products = [
  {
    id: 1,
    brand: "Audiolab",
    model:
      "9000A Silver (Limited Edition) asdas 9000A Silver (Limited Edition)",
    product_type: "headphones",
    img_card:
      "https://www.yankodesign.com/images/design_news/2023/10/top-5-speakers-designed-to-match-your-interior-style/Bang-Olufsen-limited-edition-Beosystem-72-23-15.jpg",
    rate: 4,
    price: 150,
    promo_price: 100,
    color: "black",
    new_arrive: true,
    accessories: ["1234", "3958593", "216347"],
  },
  {
    id: 2,
    brand: "Sony",
    model: "WH-1000XM4",
    product_type: "headphones",
    img_card:
      "https://copper-steampunk-design.com/products_pictures/steampunk-sound-speakers-9s.jpg",
    rate: 4.5,
    price: 300,

    color: "silver",
    new_arrive: false,
    accessories: ["1234", "5678", "91011"],
  },
  {
    id: 3,
    brand: "Bose",
    model: "QuietComfort 35 II",
    product_type: "headphones",
    img_card:
      "https://m.media-amazon.com/images/I/611zcTURLsL._AC_UF1000,1000_QL80_.jpg",
    rate: 4.8,
    price: 350,
    promo_price: 300,
    color: "black",
    new_arrive: false,
    accessories: ["1234", "5678", "91011"],
  },
  // Додайте інші об'єкти за аналогією з вказаним форматом даних
  {
    id: 4,
    brand: "Sennheiser",
    model: "HD 660 S",
    product_type: "headphones",
    img_card:
      "https://media.wired.com/photos/59325903aef9a462de9821be/master/w_1600%2Cc_limit/747192124526_41.jpg",
    rate: 4.7,
    price: 400,
    color: "matte black",
    new_arrive: true,
    accessories: ["1234", "5678", "91011"],
  },
  {
    id: 5,
    brand: "Beats by Dre",
    model: "Solo Pro",
    product_type: "headphones",
    img_card:
      "https://cdn.trendhunterstatic.com/phpthumbnails/457/457735/457735_1_800.jpeg",
    rate: 4.3,
    price: 250,
    promo_price: 200,
    color: "red",
    new_arrive: true,
    accessories: ["1234", "5678", "91011"],
  },
  {
    id: 6,
    brand: "AKG",
    model: "K701",
    product_type: "headphones",
    img_card: "https://d6z72aalekwc3.cloudfront.net/large/5b563e5b78ad6.jpg",
    rate: 4.6,
    price: 200,
    promo_price: 180,
    color: "white",
    new_arrive: false,
    accessories: ["1234", "5678", "91011"],
  },
  {
    id: 7,
    brand: "JBL",
    model: "Tune 500BT",
    product_type: "headphones",
    img_card:
      "https://www.soundandvision.com/images/styles/600_wide/public/614mksp.promo_.jpg",
    rate: 4.2,
    price: 80,
    promo_price: 70,
    color: "blue",
    new_arrive: false,
    accessories: ["1234", "5678", "91011"],
  },
  {
    id: 8,
    brand: "Audio-Technica",
    model: "ATH-M50x",
    product_type: "headphones",
    img_card:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQNt3b4XqZJ2bIuw1XSxpZ0V2p21ulFQn0g&usqp=CAU",
    rate: 4.9,
    price: 150,
    promo_price: 130,
    color: "black",
    new_arrive: false,
    accessories: ["1234", "5678", "91011"],
  },
];
function OnSale() {
  return (
    <StyledNewArrives>
      <Container>
        <h2>On Sale</h2>
        <div className="items_container">
          {products.map((element) => (
            <Link key={element.id} to={`/product/${element.id}`}>
              <CardItem {...element} />
            </Link>
          ))}
        </div>
        <StyledLinkShowMore to="">Show more</StyledLinkShowMore>
      </Container>
    </StyledNewArrives>
  );
}

export default OnSale;
