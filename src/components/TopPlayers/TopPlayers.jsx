import { useState } from 'react';
import { Wrapper, Title, Item, Name } from './TopPlayers.styled';

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
  const [players] = useState(MockPlayers);
  return (
    <Wrapper>
      <Title>Top players</Title>
      <ul>
        {players.map(({ nickname, score }, idx) => (
          <Item key={`${nickname}-${score}-${idx}`}>
            <Name>
              {nickname.length > 9 ? `${nickname.slice(0, 9)}...` : nickname}
            </Name>
            <span>{score}</span>
          </Item>
        ))}
      </ul>
    </Wrapper>
  );
};
