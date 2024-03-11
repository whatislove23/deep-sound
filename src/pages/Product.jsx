import PropTypes from "prop-types";
import Container from "../components/Container/Container";
import { useParams } from "react-router-dom";
import { StyledProduct } from "./StyledProduct.styled";

function Product(props) {
  const { id } = useParams();
  return (
    <StyledProduct>
      <Container>Product...{id}</Container>
    </StyledProduct>
  );
}

Product.propTypes = {};

export default Product;
