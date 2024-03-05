import Cancel from '../Cancel/Cancel';
import { StyledHeartRed, StyledHeartWhite, StyledNotification, StyledUndoButton } from './StyledNotifications.styled';

const Notification = (props) => {
    return (
        <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <StyledNotification>
                <h4>{props.title}</h4>
                <Cancel btnType='light' />
            </StyledNotification>
        </span>
    )
}

export const NotiFavorite = (props) => {
    let title = '';
    let icon;
    let undo;
    if (props.isFavorite) {
        icon = <StyledHeartRed />;
        title = 'Added to Favorites';
    } else {
        icon = <StyledHeartWhite />;
        title = 'Removed from Favorites';
        undo = <StyledUndoButton>Undo</StyledUndoButton>;
    }
    return (
        <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <StyledNotification>
                {icon}
                <h4>{title}</h4>
                {undo}
                <Cancel btnType='light' />
            </StyledNotification>
        </span>
    )
}

export default Notification;

