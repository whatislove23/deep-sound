import Button from '../../Button/Button';
import { StyledMastercard, StyledOrderCheckout, StyledPayPal, StyledPayoneer, StyledVisa } from './StyledOrderCheckout.styled';

function OrderCheckout() {
    return (
        <StyledOrderCheckout>
            <div>
                <div>
                    <span>Cart Totals:</span>
                    <span><i>$</i> 200850.00</span>
                </div>
                <span>*Taxes and shipping calculated at checkout</span>
                <section>
                    <Button children={'Check out'} btnType='dark' />
                    <Button children={'Cancel'} btnType='light' />
                </section>
            </div>
            <span>
                <StyledMastercard />
                <StyledVisa />
                <StyledPayPal />
                <StyledPayoneer />
            </span>
        </StyledOrderCheckout>
    )
}

export default OrderCheckout;