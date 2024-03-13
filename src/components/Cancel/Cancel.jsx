import PropTypes from "prop-types";
import { StyledCancelButton } from "./StyledCancel.styled";

const Cancel = ({ children, btnType = "light", ...restProps }) => {
    return (
        <StyledCancelButton $btnType={btnType} {...restProps}>
            {children}
        </StyledCancelButton>
    )
}

export default Cancel;

Cancel.propTypes = {
    children: PropTypes.node,
    btnType: PropTypes.string,
  };
