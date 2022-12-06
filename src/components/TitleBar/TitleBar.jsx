import { Wrapper, Title, InfoWrapper, Info, Score } from './TitleBar.styled';

export const TitleBar = ({ nickname, score }) => {
  return (
    <Wrapper>
      <Title>{nickname}</Title>
      <InfoWrapper>
        <Info>Your score:</Info>
        <Score>{score}</Score>
      </InfoWrapper>
    </Wrapper>
  );
};
