import Container from "../components/Container/Container";
import CartEmpty from "../components/Cart/CartEmpty/CartEmpty";
import CartFilled from "../components/Cart/CartFilled/CartFilled";

function Cart(props) {
    return (
        <Container>
            {props.isEmpty ? 
                <CartEmpty /> :
                <CartFilled />
            }
        </Container>
    )
}

export default Cart;