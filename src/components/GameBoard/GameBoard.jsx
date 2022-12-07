import { useState, useEffect } from 'react';
import { Cell } from 'components/Cell/Cell';
import { Board, Info, Wrapper, Button } from './GameBoard.styled';
import { Movement } from 'components/Movement/Movement';

export const GameBoard = ({
  rows,
  cols,
  changeScore,
  score,
  isActive,
  handleActive,
  nickname,
  isPaused,
}) => {
  const initialState = {
    row: Math.floor((rows - 1) / 2),
    col: Math.floor((cols - 1) / 2),
  };
  const [isBegin, setIsBegin] = useState(true);
  const [grid, setGrid] = useState([]);
  const [food, setFood] = useState(null);
  const [head, setHead] = useState(initialState);
  const [body, setBody] = useState([]);
  const [snakeLength, setSnakeLength] = useState(0);
  const [direction, setDirection] = useState('right');
  const [tickTime, setTickTime] = useState(500);
  const [level, setLevel] = useState(1);
  const [message, setMessage] = useState('Game over!');

  // Victory condition
  useEffect(() => {
    const gridSize = rows * cols;
    if (gridSize - 1 === snakeLength) {
      setMessage('You got maximum points for this try!');
      handleActive(false);
    }
  }, [cols, handleActive, rows, snakeLength]);

  // Movement speed increasing
  useEffect(() => {
    if (Math.floor(score / 50) === level) {
      setLevel(level + 1);
      setTickTime(tickTime * 0.9);
    }
  }, [level, score, tickTime]);

  // Food creating
  useEffect(() => {
    const getRandomFood = () => {
      let foodScore = Math.random();
      if (foodScore > 0.9) {
        foodScore = 10;
      } else if (foodScore > 0.6) {
        foodScore = 5;
      } else {
        foodScore = 1;
      }
      return {
        row: Math.floor(Math.random() * rows),
        col: Math.floor(Math.random() * cols),
        score: foodScore,
      };
    };
    let newFood = getRandomFood();
    if (isBegin) {
      const firstCondition =
        newFood.row === head.row && newFood.col === head.col;
      const secondCondition = body.some(
        itm => itm.row === newFood.row && itm.col === newFood.col
      );
      while (firstCondition || secondCondition) {
        newFood = getRandomFood();
      }
      setFood(newFood);
      setIsBegin(false);
    }

    if (food && head.row === food.row && head.col === food.col) {
      setSnakeLength(snakeLength + 1);
      changeScore(score + food.score);
      if (newFood.row === head.row && newFood.col === head.col) {
        newFood = getRandomFood();
      }
      setFood(newFood);
    }
  }, [head, food, snakeLength, isBegin, rows, cols, changeScore, score, body]);

  // Grid creating
  useEffect(() => {
    const gridArray = [];
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        let status = 'cell';
        if (food && row === food.row && col === food.col) {
          status = 'food';
        } else if (body.some(itm => row === itm?.row && col === itm?.col)) {
          status = 'body';
        } else if (row === head.row && col === head.col) {
          status = 'head';
        } else {
          status = 'cell';
        }
        gridArray.push({
          row,
          col,
          status,
        });
      }
    }
    setGrid(gridArray);
  }, [rows, cols, food, head, body]);

  // Movement creating function
  const NextCellCalculate = () => {
    const newCell = {};
    if (direction === 'right') {
      const newCol = head.col + 1;
      newCell.row = head.row;
      newCell.col = newCol === cols ? 0 : newCol;
    } else if (direction === 'left') {
      const newCol = head.col - 1;
      newCell.row = head.row;
      newCell.col = newCol < 0 ? cols - 1 : newCol;
    } else if (direction === 'top') {
      const newRow = head.row - 1;
      newCell.row = newRow < 0 ? rows - 1 : newRow;
      newCell.col = head.col;
    } else if (direction === 'bottom') {
      const newRow = head.row + 1;
      newCell.row = newRow === rows ? 0 : newRow;
      newCell.col = head.col;
    }

    let newBody = [];
    if (snakeLength === 0) {
      newBody = [];
    } else if (snakeLength > body.length) {
      newBody = [...body, { row: head.row, col: head.col }];
    } else if (snakeLength === body.length) {
      const shiftedBody = body;
      shiftedBody.shift();
      newBody = [...shiftedBody, { row: head.row, col: head.col }];
    }

    setHead(newCell);
    setBody(newBody);
  };

  // Controls
  useEffect(() => {
    const handleArrowsKeys = e => {
      if (e.code === 'ArrowUp' && direction !== 'bottom') {
        setDirection('top');
      } else if (e.code === 'ArrowRight' && direction !== 'left') {
        setDirection('right');
      } else if (e.code === 'ArrowDown' && direction !== 'top') {
        setDirection('bottom');
      } else if (e.code === 'ArrowLeft' && direction !== 'right') {
        setDirection('left');
      }
    };
    window.addEventListener('keydown', handleArrowsKeys);
    return () => {
      window.removeEventListener('keydown', handleArrowsKeys);
    };
  }, [direction]);

  // Game over handling
  useEffect(() => {
    const isCrashing = body.some(
      itm => itm.row === head.row && itm.col === head.col
    );
    if (isCrashing) {
      setMessage('Game over!');
      handleActive(false);
    }
  }, [body, handleActive, head]);

  // Play again handling
  const onPlayAgainClick = () => {
    setHead(initialState);
    setSnakeLength(0);
    setLevel(1);
    setBody([]);
    changeScore(0);
    handleActive(true);
  };

  return (
    <>
      <Board>
        {isActive &&
          grid.map(({ row, col, status }) => (
            <Cell
              key={`${row}-${col}`}
              status={status}
              foodScore={food.score}
            />
          ))}
        {!isActive && (
          <Wrapper>
            <Info>
              {message}
              <br /> {nickname}, you got {score} points!
            </Info>
            <Button onClick={onPlayAgainClick}>Play again</Button>
          </Wrapper>
        )}
      </Board>
      {!isPaused && (
        <Movement NextCellCalculate={NextCellCalculate} tickTime={tickTime} />
      )}
    </>
  );
};
