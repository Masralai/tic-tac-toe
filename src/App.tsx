import React, { useState } from "react";
import "./index.css";
import Block from "./components/Block";

const App: React.FC = () => {

  const [state,setState] = useState(Array(9).fill(null))
  console.log("State" ,state)

  return (
    <div className="p-5">
      <div className="flex">
        <Block/>
        <Block/>
        <Block/>
      </div>
      <div className="flex">
        <Block/>
        <Block/>
        <Block/>
      </div>
      <div className="flex">
        <Block/>
        <Block/>
        <Block/>
      </div>
      
    </div>
  );
};

export default App;
