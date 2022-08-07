import styled from "styled-components";

export const Title = styled.h2`
padding: ${p => `${p.theme.space[3]}px`};
text-align: center;
font-size: ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.secondaryText};`


export const StatList = styled.ul`
display: flex;
width: 100%;
border-radius: ${p => p.theme.radii.normal};
border-top-left-radius: 0;
border-top-right-radius: 0;
`;
export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: ${p => `${p.theme.space[3]}px`};
background-color: ${p => p.backgroundColor};
:first-child {
border-bottom-left-radius: ${p => p.theme.radii.normal};
}
:last-child {
border-bottom-right-radius: ${p => p.theme.radii.normal};
}
`;
export const StatLable = styled.span`
color: ${p => p.theme.colors.muted}
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.bold};
`
export const StatProcentage = styled.span`
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
`
