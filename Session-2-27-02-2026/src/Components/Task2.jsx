import { useState } from 'react';
import TimerComponent from './TimerComponent';


function Task2() {
 const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      <h1>Task 2</h1>

      <button onClick={()=>{ setShowTimer(showTimer => !showTimer)}}>{showTimer ? "Hide Timer" :"Show Timer"}</button>

      <br />
      <br />

      {showTimer && <TimerComponent />}
    </>
  )
}

export default Task2
