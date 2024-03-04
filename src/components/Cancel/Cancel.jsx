import { StyledCancelLight, StyledCancelDark } from "./StyledCancel.styled";

const Cancel = (props) => {
    switch (props.cancelStyle) {
        case 'light': 
            return <StyledCancelLight />;
        case 'dark': 
            return <StyledCancelDark />;
        default: 
            return  <StyledCancelDark />;
    }
}

export default Cancel;