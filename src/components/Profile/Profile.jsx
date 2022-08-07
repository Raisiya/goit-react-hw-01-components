import PropTypes from 'prop-types';
import {Box} from '../Box'
import { Description, Avatar, Name, Info, Stats, StatsItem, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes }, }) => {
    return (<Box
        mt={3}
        mx="auto"
        maxWidth={3}
        bg="primary"
        borderRadius="lardge"
    >
        <Description key={tag}>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <Name>{username}</Name>
            <Info>@{tag}</Info>
            <Info>{location}</Info>

            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsItem>
            </Stats>
        </Description>
    </Box>);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};