import { StyledArrowDown, StyledArrowUp, StyledDeleteButton, StyledOrderItem } from './StyledOrderItem.styled';

const OrderItem = (props) => {
    return (
        <StyledOrderItem>
            <img src={props.img} alt="product image"
            />
            <div style={{ width: '362px' }}>
                <div style={{ fontWeight: '400', marginBottom: '8px' }}>{props.brand}</div>
                <div style={{ marginBottom: '3px', height: '77px' }}>{props.title}</div>
                <div style={{ fonstSize: '20px', lineHeight: '20px' }}>
                    <i>$</i> {props.price}
                </div>
            </div>
            <section>
                <span>
                    <input type="number" min={0} defaultValue={1} />
                    <i>
                        <StyledArrowUp />
                        <StyledArrowDown />
                    </i>
                </span>
                    <StyledDeleteButton />
            </section>
        </StyledOrderItem>
    )
}

export default OrderItem;