import Container from "../components/Container/Container";
import CartEmpty from "../components/Cart/CartEmpty/CartEmpty";
import CartFilled from "../components/Cart/CartFilled/CartFilled";

function Cart(props) {
    let cart;
    props.isEmpty ?
    cart = <CartEmpty /> :
    cart = <CartFilled />;
    return (
        <Container>
            {cart}
        </Container>
    )
}

export default Cart;