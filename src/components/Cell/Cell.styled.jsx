import styled from 'styled-components';

export const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1f2121;
  border-radius: 2px;
  width: 20px;
  height: 20px;
  background-color: ${props => {
    if (props.status === 'food') {
      return '#343738';
    } else if (props.status === 'head') {
      return '#35c45b';
    } else if (props.status === 'body') {
      return '#167830';
    } else {
      return '#343738';
    }
  }};
`;
