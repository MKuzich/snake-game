import {
  Wrapper,
  TitleWrapper,
  Title,
  InfoWrapper,
  Info,
  Score,
  Button,
} from './TitleBar.styled';
import { ImPause, ImPlay2 } from 'react-icons/im';
import { RiEditFill } from 'react-icons/ri';

export const TitleBar = ({
  nickname,
  score,
  isPaused,
  setIsPaused,
  setShowModal,
  setModalTitle,
}) => {
  const onPauseClickHandler = () => setIsPaused(!isPaused);

  const onEditClickHandler = () => {
    setIsPaused(true);
    setModalTitle(
      'Okay, if you want to change your nickname - just do it now!'
    );
    setShowModal(true);
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{nickname}</Title>
        <Button type="button" onClick={onEditClickHandler}>
          <RiEditFill size={22} />
        </Button>
        <Button type="button" onClick={onPauseClickHandler}>
          {isPaused ? <ImPlay2 size={22} /> : <ImPause size={22} />}
        </Button>
      </TitleWrapper>

      <InfoWrapper>
        <Info>Your score:</Info>
        <Score>{score}</Score>
      </InfoWrapper>
    </Wrapper>
  );
};
