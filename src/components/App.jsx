import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { GameBoard } from './GameBoard/GameBoard';
import { Container } from './Container/Container';
import { SideBar } from './SideBar/SideBar';
import { TitleBar } from './TitleBar/TitleBar';
import { TopPlayers } from './TopPlayers/TopPlayers';
import { NicknameModal } from './NicknameModal/NicknameModal';

export const App = () => {
  const [score, setScore] = useState(0);
  const [nickname, setNickname] = useState('Player');
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [showModal, setShowModal] = useState(true);

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
          isPaused={isPaused}
        />
        <SideBar>
          <TitleBar
            nickname={nickname}
            score={score}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
          />
          <TopPlayers />
        </SideBar>
      </Container>
      {showModal && (
        <NicknameModal
          closeModal={() => setShowModal(null)}
          setNickname={setNickname}
          setIsPaused={setIsPaused}
        />
      )}
    </>
  );
};
