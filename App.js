import logo from "./logo.svg";
import "./App.css";
import Todo from "./component/Todo";
import TodosList from "./component/TodosList";
import { useState } from "react";
import FilterDynamic from "./component/FilterDynamic";

function App() {
  const [inputData, setInputData] = useState();
  return (
    <div className="Outerbox">
      <div className="textend">
        <Todo inputData={inputData} setInputData={setInputData} />
      <FilterDynamic/>
        <TodosList inputData={inputData} />
        
      </div>
    </div>
  );
}

export default App;
