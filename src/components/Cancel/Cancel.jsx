import { StyledCancelButton } from "./StyledCancel.styled";

const Cancel = ({ children, btnType = "light", ...restProps }) => {
    return (
        <StyledCancelButton $btnType={btnType} {...restProps}>
            {children}
        </StyledCancelButton>
    )
}

export default Cancel;
