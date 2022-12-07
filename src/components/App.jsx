import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { GameBoard } from './GameBoard/GameBoard';
import { Container } from './Container/Container';
import { SideBar } from './SideBar/SideBar';
import { TitleBar } from './TitleBar/TitleBar';
import { TopPlayers } from './TopPlayers/TopPlayers';
import { NicknameModal } from './NicknameModal/NicknameModal';
import { getPlayers, addPlayer } from 'service/playersApi';
import { toast } from 'react-toastify';

export const App = () => {
  const [score, setScore] = useState(0);
  const [nickname, setNickname] = useState('Player');
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [modalTitle, setModalTitle] = useState(
    'Welcome to snake game. Introduce yourself, please!'
  );
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getTopPlayers = async () => {
      try {
        const response = await getPlayers();
        setPlayers(response);
      } catch (error) {
        toast.error(error.message);
      }
    };
    if (score === 0) {
      getTopPlayers();
    }
  }, [score]);

  useEffect(() => {
    const addPlayerScore = async () => {
      try {
        await addPlayer({ nickname, score });
      } catch (error) {
        toast.error(error.message);
      }
    };
    if (!isActive && score !== 0) {
      addPlayerScore();
    }
  }, [isActive, nickname, score]);

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
            setShowModal={setShowModal}
            setModalTitle={setModalTitle}
          />
          <TopPlayers players={players} />
        </SideBar>
      </Container>
      {showModal && (
        <NicknameModal
          closeModal={() => setShowModal(null)}
          setNickname={setNickname}
          setIsPaused={setIsPaused}
          title={modalTitle}
        />
      )}
    </>
  );
};
