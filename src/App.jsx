import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DeveloperForm from "./components/DeveloperForm";
import DeveloperList from "./components/DeveloperList";
import { DeveloperReducer } from "./components/Developer";

function App() {
  const [developers, dispatch] = useReducer(DeveloperReducer, []);

  return (
    <div className="App">
      <DeveloperList developers={developers} dispatch={dispatch} />
      <DeveloperForm dispatch={dispatch} />
    </div>
  );
}

export default App;
