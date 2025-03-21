import React, { useState } from "react";
import "./index.css";
import Block from "./components/Block";

const App: React.FC = () => {

  const [state,setState] = useState(Array(9).fill(null))
  const [currentTurn,setCurrentTurn] = useState("X")
  
  
  const handleBlockClick=(index:number)=>{
    const stateCopy = Array.from(state)
    stateCopy[index] = currentTurn
    setCurrentTurn(currentTurn==='X'?'O':'X')
    setState(stateCopy)
  }

  console.log(state)

  return (
    <div className="p-5">
      <div className="flex">
        <Block  onClick={()=>handleBlockClick(0)} value={state[0]}/>
        <Block  onClick={()=>handleBlockClick(1)} value={state[1]}/>
        <Block  onClick={()=>handleBlockClick(2)} value={state[2]}/>
      </div>
      <div className="flex">
        <Block  onClick={()=>handleBlockClick(3)} value={state[3]}/>
        <Block  onClick={()=>handleBlockClick(4)} value={state[4]}/>
        <Block  onClick={()=>handleBlockClick(5)} value={state[5]}/>
      </div>
      <div className="flex">
        <Block  onClick={()=>handleBlockClick(6)} value={state[6]}/>
        <Block  onClick={()=>handleBlockClick(7)} value={state[7]}/>
        <Block  onClick={()=>handleBlockClick(8)} value={state[8]}/>
      </div>
      
    </div>
  );
};

export default App;
