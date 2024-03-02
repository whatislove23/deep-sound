import OrderList from '../OrderList/OrderList';
import OrderCheckout from '../OrderCheckout/OrderCheckout';
import Notification from '../../Notifications/Notifications';

const CartFilled = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '64px', marginBottom: '160px'}}>
                <OrderList />
                <OrderCheckout />
            </div>
            <Notification title='The position has already been added'/>
        </div>
    )
}

export default CartFilled;