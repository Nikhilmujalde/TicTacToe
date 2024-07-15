import React, { useState } from 'react'
const circleSvg = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

const crossSvg = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M19 5L5 19M5.00001 5L19 19"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>
);
const Square = ({id,currentPlayer,setcurrentPlayer,setgamestate,finishState,setfinishState}) => {
  const [icon, seticon] = useState(null)
  
  const handleClick=()=>{
    // creating toggle between circle and cross
    if(!icon){
      if(currentPlayer === 'circle')
      seticon(circleSvg)
      else seticon(crossSvg)
    }
    const myCurrentPlayer = currentPlayer;
    setcurrentPlayer(currentPlayer === 'circle' ? 'cross':'circle')
    setgamestate(prevState=>{
      let newState = [...prevState];
      // console.log(newState);
      // console.log(id)
      const rowIndex = Math.floor(id/3);
      const colIndex = Math.floor(id%3);
      newState[rowIndex][colIndex] = myCurrentPlayer
      console.log(newState)
      return newState
    })
  }
  return (
    <div onClick={handleClick} className='bg-[#4B495F] h-[100px] w-[100px]  rounded-lg' >
        <div className="flex justify-center items-center">
          {icon}
        </div>
    </div>
  )
}

export default Square
