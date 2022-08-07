import styled from 'styled-components';

export const TableTitle = styled.th`
padding: ${p => `${p.theme.space[2]}px`};
background-color: ${p => p.theme.colors.secondary};
font-size: ${p => p.theme.fontSizes.l};
`;
export const TableDescription = styled.th`
padding: ${p => `${p.theme.space[3]}px`};
background-color: ${p => p.theme.colors.muted};
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.normal};
`;

export const TableRow = styled.tr`
:last-child ${TableDescription}:first-child {
border-bottom-left-radius: ${p => p.theme.radii.normal};
}
:last-child ${TableDescription}:last-child {
border-bottom-right-radius: ${p => p.theme.radii.normal};
}
`;