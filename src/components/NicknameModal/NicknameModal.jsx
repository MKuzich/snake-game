import {
  Overlay,
  ModalWindow,
  Title,
  Input,
  Form,
  Button,
} from './NicknameModal.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const NicknameModal = ({ closeModal, setNickname }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    setNickname(e.target.elements.nickname.value);
    closeModal();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Title>Welcome to snake game. Introduce yourself, please!</Title>
        <Form onSubmit={onSubmitHandler}>
          <Input name="nickname" placeholder="Enter your nickname..." />
          <Button type="submit">Go!</Button>
        </Form>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
