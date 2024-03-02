import { StyledBlackButtonTemplate } from '../../StyledButtons.styled';
import { StyledCartEmpty } from './Styled.CartEmpty.styled';

const CartEmpty = () => {
    return (
        <StyledCartEmpty>
            <div>Your cart is empty</div>
            <StyledBlackButtonTemplate>
                Continue shopping
            </StyledBlackButtonTemplate>
        </StyledCartEmpty>
    )
}

export default CartEmpty;