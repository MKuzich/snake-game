import styled from 'styled-components';

export const Board = styled.div`
  width: 400px;
  height: 400px;
  margin: 100px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #343738;
`;

export const Info = styled.p`
  color: #f2f5f3;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.5;
`;

export const Wrapper = styled.div`
  border: 1px solid #f2f5f3;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  color: #f2f5f3;
  background-color: #343738;
  border: 1px solid #f2f5f3;
  text-transform: uppercase;
  border-radius: 4px;
  margin-top: 10px;
  padding: 8px 12px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #343738;
    background-color: #f2f5f3;
  }
`;
