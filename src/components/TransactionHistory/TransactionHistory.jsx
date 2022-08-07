import PropTypes from 'prop-types';
import { Box } from '../Box';
import {TableRow, TableTitle, TableDescription} from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
    return (
        <Box
            mx="auto"
            mt={3}
            width={3}
            textAligne="center"
            alignItems="center"
            as={'table'}
        >
            <thead>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </thead>
                
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TableRow key={id} id={id}>
                            <TableDescription>{type}</TableDescription>
                            <TableDescription>{amount}</TableDescription>
                            <TableDescription>{currency}</TableDescription>
                        </TableRow>
                ))
                };
            </tbody>
        </Box>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};