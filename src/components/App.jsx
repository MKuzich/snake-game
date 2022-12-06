import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { GameBoard } from './GameBoard/GameBoard';

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
      <GameBoard
        rows={20}
        cols={20}
        changeScore={changeScore}
        score={score}
        isActive={isActive}
        handleActive={handleActive}
        nickname={nickname}
      />
    </>
  );
};
