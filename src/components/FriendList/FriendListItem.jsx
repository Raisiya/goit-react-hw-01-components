import { FriendsItem, FriendAvatar, Name, IsOnline, IsOffline } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsItem>
            {isOnline ? <IsOnline/> : <IsOffline/>}
            <FriendAvatar src={avatar} alt="User avatar" width="64" />
            <Name>{name}</Name>
        </FriendsItem>
    );
};
