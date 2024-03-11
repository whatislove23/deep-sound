import OrderList from '../OrderList/OrderList';
import OrderCheckout from '../OrderCheckout/OrderCheckout';
import Notification from '../../Notifications/Notifications';
import { StyledCartFilled } from './StyledCartFilled.styled';

const CartFilled = () => {
    return (
        <div>
            <StyledCartFilled>
                <OrderList />
                <OrderCheckout />
            </StyledCartFilled>
            <Notification title='The position has already been added'/>
        </div>
    )
}

export default CartFilled;