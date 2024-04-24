import React from 'react'
import '../Styles/buttomArea.css'
import '../Styles/buttoms.css'



const Buttoms = ({start, stop, reset}) => {



  return (
    <>
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={reset}>RESTART</button>
    </>
    
  )
}

export default Buttoms
