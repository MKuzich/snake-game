import { useState } from 'react';
import {
  Wrapper,
  Title,
  InfoWrapper,
  Head,
  Item,
  Name,
  Score,
} from './TopPlayers.styled';

const MockPlayers = [
  { nickname: 'Paul', score: 371 },
  { nickname: 'WWWWWWWWWW', score: 371 },
  { nickname: 'Paul', score: 371 },
  { nickname: 'Paul', score: 371 },
  { nickname: 'Paul', score: 371 },
  { nickname: 'Paul', score: 371 },
  { nickname: 'Paul', score: 371 },
  { nickname: 'Paul', score: 371 },
  { nickname: 'Paul', score: 371 },
  { nickname: 'Paul', score: 371 },
];

export const TopPlayers = () => {
  const [players, setPlayrs] = useState(MockPlayers);
  return (
    <Wrapper>
      <Title>Top players</Title>
      <InfoWrapper>
        <Head></Head>
        <ul>
          {players.map(({ nickname, score }) => (
            <Item>
              <Name>
                {nickname.length > 9 ? `${nickname.slice(0, 9)}...` : nickname}
              </Name>
              <Score>{score}</Score>
            </Item>
          ))}
        </ul>
      </InfoWrapper>
    </Wrapper>
  );
};
