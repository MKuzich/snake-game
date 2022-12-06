import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  width: 600px;
  padding: 40px 60px;
  background-color: #f2f5f3;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  font-size: 20px;
  border: 1px solid #1f2121;
  border-radius: 8px;
  padding: 8px 12px;
  width: 100%;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    outline: none;
    background-color: #cfd3d4;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  border: 1px solid #1f2121;
  border-radius: 8px;
  font-size: 20px;
  padding: 8px 12px;
  color: #343738;
  background-color: #f2f5f3;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #f2f5f3;
    background-color: #343738;
  }
`;
