import { useEffect } from 'react';

export const Movement = ({ NextCellCalculate, tickTime }) => {
  useEffect(() => {
    const tickInterval = setInterval(() => NextCellCalculate(), tickTime);
    return () => clearInterval(tickInterval);
  });
};
