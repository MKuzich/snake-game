import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { GameBoard } from './GameBoard/GameBoard';

export const App = () => {
  const [score, setScore] = useState(0);

  const increaseScore = value => {
    setScore(score + value);
  };
  return (
    <>
      <GlobalStyle />
      <GameBoard
        rows={20}
        cols={20}
        increaseScore={increaseScore}
        score={score}
      />
    </>
  );
};
