import PropTypes from 'prop-types';
import { Box } from '../Box';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <Box mx='auto' mt={3} maxWidth={2} as={'ul'}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            })}
        </Box>
    )
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool
        }).isRequired
    ).isRequired
};