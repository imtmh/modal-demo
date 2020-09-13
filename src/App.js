import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./Components/Modal";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
        <Modal isOpen={isOpen} />
      </header>
    </div>
  );
}

export default App;
