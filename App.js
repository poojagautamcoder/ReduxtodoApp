import logo from "./logo.svg";
import "./App.css";
import Todo from "./component/Todo";
import TodosList from "./component/TodosList";
import { useState } from "react";
import Filterdynamic from "./component/Filterdynamic";

function App() {
  const [inputData, setInputData] = useState();
  return (
    <div className="Outerbox">
      <div className="textend">
        <Todo inputData={inputData} setInputData={setInputData} />
        <Filterdynamic/>
        <TodosList inputData={inputData} />
        
      </div>
    </div>
  );
}

export default App;
