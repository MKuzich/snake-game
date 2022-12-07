import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  color: #f2f5f3;
  font-size: 20px;
`;

export const Item = styled.li`
  color: #f2f5f3;
  font-size: 18px;
  padding: 4px 0;
  :nth-of-type(2n + 1) {
    background-color: #272829;
  }
`;

export const Name = styled.span`
  display: inline-block;
  font-weight: 700;
  width: 180px;
`;

export const Info = styled.p`
  color: #f2f5f3;
  font-size: 18px;
  padding: 4px 0;
`;
