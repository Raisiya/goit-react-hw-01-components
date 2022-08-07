import styled from "styled-components";

export const FriendsItem = styled.li`
display: flex;
align-items: center;
padding: ${p => `${p.theme.space[3]}px`};
margin: ${p => `${p.theme.space[3]}px`};
:first-child {
    margin-top: 0;
}
:last-child {
    margin-bottom: 0;
}
background-color: ${p => p.theme.colors.muted};
box-shadow: ${p => p.theme.shadows.darkBox};
	border-radius: ${p => p.theme.radii.large};
`
export const FriendAvatar = styled.img`
wigth: ${p => '{p.theme.sizes[0]}px'};
margin-left: ${p => `${p.theme.space[3]}px`};

`
export const Name = styled.p`
font-size: ${p => p.theme.fontSizes.l};
line-height: ${p => p.theme.lineHeights.heading};
margin-left: ${p => `${p.theme.space[3]}px`};
`
export const IsOnline = styled.span`
width: 10px;
height: 10px;
background-color: ${p => p.theme.colors.red};
border-radius: ${p => p.theme.radii.round};
`
export const IsOffline = styled.span`
width: 10px;
height: 10px;
background-color: ${p => p.theme.colors.green};
border-radius: ${p => p.theme.radii.round};
`