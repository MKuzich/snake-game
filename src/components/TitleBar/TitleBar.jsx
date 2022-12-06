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

export const TitleBar = ({ nickname, score, isPaused, setIsPaused }) => {
  const onPauseClickHandler = () => setIsPaused(!isPaused);
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{nickname}</Title>
        <Button type="button">
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
