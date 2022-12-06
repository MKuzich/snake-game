import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { GameBoard } from './GameBoard/GameBoard';
import { Container } from './Container/Container';
import { SideBar } from './SideBar/SideBar';
import { TitleBar } from './TitleBar/TitleBar';
import { TopPlayers } from './TopPlayers/TopPlayers';

export const App = () => {
  const [score, setScore] = useState(0);
  const [nickname, setNickname] = useState('Player');
  const [isActive, setIsActive] = useState(true);

  const changeScore = value => {
    setScore(value);
  };

  const handleActive = value => {
    setIsActive(value);
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <GameBoard
          rows={20}
          cols={20}
          changeScore={changeScore}
          score={score}
          isActive={isActive}
          handleActive={handleActive}
          nickname={nickname}
        />
        <SideBar>
          <TitleBar nickname={nickname} score={score} />
          <TopPlayers />
        </SideBar>
      </Container>
    </>
  );
};
