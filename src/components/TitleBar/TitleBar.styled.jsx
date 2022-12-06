import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #f2f5f3;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  padding: 5px 0;
  color: #f2f5f3;
  font-size: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Info = styled.p`
  color: #f2f5f3;
`;

export const Score = styled.p`
  color: #f2f5f3;
  font-weight: 700;
  font-size: 24px;
`;

export const Button = styled.button`
  border-radius: 50%;
  margin-left: 10px;
  padding: 0;
  border: none;
  color: #f2f5f3;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
