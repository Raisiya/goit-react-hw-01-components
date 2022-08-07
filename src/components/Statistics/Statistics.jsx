import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, StatList, StatItem, StatLable, StatProcentage } from './Statistics.styled';
import { randomColor } from 'components/Colorpicer/Colorpicer';

export const Statistics = ({ title, stats }) => {
    return (
        <Box mt={3} mx="auto" maxWidth={3} bg="secondary" borderRadius="normal">
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatItem key={id} id={id} backgroundColor={randomColor()} >
                        <StatLable>{label}</StatLable>
                        <StatProcentage>{percentage}%</StatProcentage>
                    </StatItem>)
                })}
            </StatList>
        </Box>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired,
    ).isRequired,
};