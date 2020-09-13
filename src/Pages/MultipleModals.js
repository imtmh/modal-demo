import React, { useState } from "react";
import Modal from "../Components/Modal";

function Basic() {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <header className="App-header">
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
      <Modal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)} title="First header">
        <p>This is content for first modal</p>
        <Modal isOpen={isOpen2} toggleModal={() => setIsOpen2(!isOpen2)}>
          <p>This is for second modal</p>

          <button onClick={() => setIsOpen(!isOpen)}>close first modal</button>
        </Modal>
        <button onClick={() => setIsOpen2(!isOpen2)}>Open second modal</button>
      </Modal>
    </header>
  );
}

export default Basic;
