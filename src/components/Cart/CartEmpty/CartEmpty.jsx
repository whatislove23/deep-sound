import { StyledCartEmpty } from './Styled.CartEmpty.styled';
import Button from '../../Button/Button';

const CartEmpty = () => {
    return (
        <StyledCartEmpty>
            <div>Your cart is empty</div>
            <Button children={'Continue shopping'} btnType='dark'/>
        </StyledCartEmpty>
    )
}

export default CartEmpty;