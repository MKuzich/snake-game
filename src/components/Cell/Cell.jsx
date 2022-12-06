import { StyledCell } from './Cell.styled';
import { FaPizzaSlice, FaHamburger, FaAppleAlt } from 'react-icons/fa';

export const Cell = ({ status, foodScore }) => {
  return (
    <StyledCell status={status}>
      {status === 'food' && foodScore === 10 && (
        <FaPizzaSlice color="#f2f5f3" />
      )}
      {status === 'food' && foodScore === 5 && <FaHamburger color="#f2f5f3" />}
      {status === 'food' && foodScore === 1 && <FaAppleAlt color="#f2f5f3" />}
    </StyledCell>
  );
};
