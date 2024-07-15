import { useEffect, useState } from 'react';
import Square from '../components/Square.jsx';

function App() {
  const renderFrom = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const [gamestate, setgamestate] = useState(renderFrom);
  const [currentPlayer, setcurrentPlayer] = useState('circle');
  const [finishState, setfinishState] = useState(null);
  const [finishedArrayState, setfinishedArrayState] = useState([]);
  const [playOnline, setplayOnline] = useState(false)

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setfinishState(winner);
    }
  }, [gamestate]);

  const checkWinner = () => {
    for (let row = 0; row < gamestate.length; row++) {
      if (gamestate[row][0] === gamestate[row][1] && gamestate[row][0] === gamestate[row][2]) {
        setfinishedArrayState([row * 3, row * 3 + 1, row * 3 + 2]);
        return gamestate[row][0];
      }
    }
    for (let col = 0; col < gamestate.length; col++) {
      if (gamestate[0][col] === gamestate[1][col] && gamestate[0][col] === gamestate[2][col]) {
        setfinishedArrayState([col, col + 3, col + 6]);
        return gamestate[0][col];
      }
    }
    if (gamestate[0][0] === gamestate[1][1] && gamestate[0][0] === gamestate[2][2]) {
      setfinishedArrayState([0, 4, 8]);
      return gamestate[0][0];
    }
    if (gamestate[0][2] === gamestate[1][1] && gamestate[0][2] === gamestate[2][0]) {
      setfinishedArrayState([2, 4, 6]);
      return gamestate[0][2];
    }

    let count = 0;
    for (let row = 0; row < gamestate.length; row++) {
      for (let col = 0; col < gamestate.length; col++) {
        if (gamestate[row][col] === 'circle' || gamestate[row][col] === 'cross') count++;
      }
    }
    if (count === 9) return 'draw';
    return null;
  };
  if(!playOnline){
    return <div className='flex mt-80 justify-center  items-center'>
      <button className='bg-[#E4CA56] text-black text-6xl font-bold cursor-pointer rounded-lg p-4'>Play online</button>
    </div>
  }
  return (
    <div className="flex mt-5 justify-center items-center">
      <div>
        <div className="move-detection flex justify-between mb-6">
          <div className="left h-[60px] text-center flex justify-center items-center rounded-lg w-[120px] text-xl bg-red-800">Yourself</div>
          <div className="right rounded-xl h-[60px] w-[120px] flex justify-center items-center text-xl bg-red-800">Opponent</div>
        </div>
        <h1 className="bg-[#4B495F] px-7 rounded-lg py-4 text-center font-semibold mb-10 text-3xl">Tic Tac Toe</h1>
        <div className={`grid grid-cols-3 gap-6 ${finishState ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}>
          {gamestate.map((arr, rowIndex) => arr.map((e, colIndex) => (
            <Square
              id={rowIndex * 3 + colIndex}
              finishedArrayState={finishedArrayState}
              currentPlayer={currentPlayer}
              setcurrentPlayer={setcurrentPlayer}
              setgamestate={setgamestate}
              finishState={finishState}
              setfinishState={setfinishState}
              key={rowIndex * 3 + colIndex}
            />
          )))}
        </div>
        <div>
          {finishState && finishState === 'draw' && (
            <p className="text-3xl mt-3 text-center font-semibold">The game is a draw</p>
          )}
          {finishState && finishState !== 'draw' && (
            <p className="text-3xl mt-3 text-center font-semibold">{finishState} won the game</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
