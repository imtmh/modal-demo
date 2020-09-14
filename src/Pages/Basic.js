import React, { useState } from "react";

import Modal from "../Components/Modal";

function Basic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="App-header">
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
      <Modal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)} title="First header">
        <p>This is content for first modal</p>

        <button onClick={() => {}}>some operatiion</button>
      </Modal>
    </header>
  );
}

export default Basic;
