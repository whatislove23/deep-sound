import {
    StyledCartModal,
    StyledCartModalEmpty,
    StyledCartModalFilled,
    StyledCartModalFooter,
    StyledCartModalHeader
} from "./StyledCartModal.styled";
import Button from '../../Button/Button';
import Cancel from "../../Cancel/Cancel";
import OrderItem from '../OrderItem/OrderItem';

const CartFilled = (props) => {
    return (
        <div>
            <StyledCartModalFilled>
                <OrderItem
                    img={'#'}
                    brand={'brand'}
                    title={'title'}
                    price={'price'}
                />
            </StyledCartModalFilled>
            <StyledCartModalFooter>
                <h1>
                    <div>Subtotal:</div>
                    <div>
                        <i>$ </i> 
                        <i>200850.00</i>
                    </div>
                </h1>
                <div>*Taxes and shipping calculated at checkout</div>
                <div>Shipping information</div>
                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <Button style={{ width: '152px', fontSize: '20px', lineHeight: '20px' }} children={'View Cart'} btnType='light' />
                    <Button style={{ width: '256px', fontSize: '20px', lineHeight: '24px' }} children={'Check out'} btnType='dark' />
                </div>
            </StyledCartModalFooter>
        </div>
    )
}

const CartEmpty = (props) => {
    return (
        <StyledCartModalEmpty>
            <span>Your cart is empty</span>
            <Button children={'Continue shopping'} btnType='dark' />
        </StyledCartModalEmpty>
    )
}

const CartModal = (props) => {
    let cartModal;
    props.cartModal ?
    cartModal = <CartEmpty /> :
    cartModal = <CartFilled />
    return (
        <StyledCartModal>
            <StyledCartModalHeader>
                <h2>Your cart</h2>
                <Cancel btnType='dark' />
            </StyledCartModalHeader>
            {cartModal}
        </StyledCartModal>
    )
}

export default CartModal;