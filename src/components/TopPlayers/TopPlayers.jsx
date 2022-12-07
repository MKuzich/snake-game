import { Wrapper, Title, Item, Name, Info } from './TopPlayers.styled';

export const TopPlayers = ({ players }) => {
  return (
    <Wrapper>
      <Title>Top players</Title>
      {players.length !== 0 ? (
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
      ) : (
        <Info>Nobody played yet</Info>
      )}
    </Wrapper>
  );
};
