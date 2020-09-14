import React, { useState } from "react";

import Modal from "../Components/Modal";

function HeightWidthConfig() {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState({ title: "Demo Modal", closeButtonLabel: "Cancel" });
  return (
    <header className="App-header">
      <label>
        Height: <input type="number" onChange={(e) => setConfig({ ...config, height: e.target.value })}></input>{" "}
      </label>
      <label>
        Width: <input type="number" onChange={(e) => setConfig({ ...config, width: e.target.value })}></input>{" "}
      </label>
      <label>
        Title: <input type="text" value={config.title} onChange={(e) => setConfig({ ...config, title: e.target.value })}></input>{" "}
      </label>
      <label>
        Close button text:{" "}
        <input type="text" value={config.closeButtonLabel} onChange={(e) => setConfig({ ...config, closeButtonLabel: e.target.value })}></input>{" "}
      </label>
      <label>
        No Header: <input type="checkbox" onChange={(e) => setConfig({ ...config, hideHeader: e.target.checked })}></input>{" "}
      </label>
      <label>
        No Footer: <input type="checkbox" onChange={(e) => setConfig({ ...config, hideFooter: e.target.checked })}></input>{" "}
      </label>
      <label>
        No Overlay: <input type="checkbox" onChange={(e) => setConfig({ ...config, noOverlay: e.target.checked })}></input>{" "}
      </label>
      <br></br>
      <button disabled={isOpen} onClick={() => setIsOpen(!isOpen)}>
        Open Modal
      </button>
      <br></br>
      <br></br>
      <br></br>
      <button disabled={!isOpen} onClick={() => setIsOpen(!isOpen)}>
        Close Modal
      </button>
      <Modal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)} {...{ ...config }}>
        <p>This is content for first modal</p>

        <button onClick={() => {}}>some operatiion</button>
      </Modal>
    </header>
  );
}

export default HeightWidthConfig;
