import { StyledOrderList } from "./StyledOrderList.styled";
import OrderItem from "../OrderItem/OrderItem";

function OrderList() {
    return (
        <StyledOrderList>
            <OrderItem 
                img={'#'} 
                brand={'brand'} 
                title={'title'} 
                price={'price'}
            />
        </StyledOrderList>
    )
}

export default OrderList;