import { useEffect, useState } from 'react'
import Square from '../components/Square.jsx'


function App() {
  const renderFrom = [[1,2,3],[4,5,6],[7,8,9]]
  const [gamestate, setgamestate] = useState(renderFrom)
  const [currentPlayer, setcurrentPlayer] = useState('circle')
  const [finishState, setfinishState] = useState(false)
  useEffect(() => {
    // console.log(gamestate)
  }, [gamestate])
  const checkWinnder=()=>{
    
  }
  return (
   <div className='flex mt-5 justify-center items-center'>
    <div>
      <div className="move-detection flex justify-between mb-6">
        <div className="left h-[60px] text-center flex justify-center items-center rounded-lg w-[120px] text-xl bg-red-800">Yourself</div>
        <div className="right rounded-xl h-[60px] w-[120px] flex justify-center items-center text-xl bg-red-800">Opponent</div>
      </div>
      <h1 className='bg-[#4B495F] px-7 rounded-lg py-4 text-center font-semibold mb-10 text-3xl'>Tic Tac Toe</h1>
      <div className='grid grid-cols-3 gap-6 hover:cursor-pointer'>
        {
          gamestate.map((arr,rowIndex)=>arr.map((e,colIndex)=>{
            return <Square id={rowIndex*3 + colIndex} currentPlayer={currentPlayer} setcurrentPlayer={setcurrentPlayer} setgamestate={setgamestate} finishState={finishState} setfinishState={setfinishState} key={rowIndex*3 + colIndex}/>
          }))
        }
      
      </div>
        
    </div>
   </div>
  )
}

export default App
