import React, { useRef, useState } from "react";
import Modal from "../Components/Modal";

const NUMBER_OF_ITEMS = 10;
function MultipleModals() {
  const [openModals, setOpenModals] = useState({});

  const modalRef = useRef(openModals);
  modalRef.current = openModals;

  function handleOpenMultiModals() {
    for (let index = 0; index < NUMBER_OF_ITEMS; index++) {
      setTimeout(() => setOpenModals({ ...modalRef.current, [index + 1]: index + 1 }), index * 100);
    }
  }
  return (
    <header className="App-header">
      <RenderButton item={1} index={1} key={1} onClick={() => handleOpenMultiModals()} />

      {[...Array(NUMBER_OF_ITEMS)].map((item, index) => (
        <Modal
          key={index}
          isOpen={!!openModals[index + 1]}
          toggleModal={() => setOpenModals({ ...openModals, [index + 1]: undefined })}
          title={"Modal Header:" + (index + 1)}
        >
          <p>This is content for modal {index + 1}</p>
        </Modal>
      ))}
    </header>
  );
}

function RenderButton({ item, index, onClick }) {
  return (
    <div>
      <button onClick={onClick}>Open 10 stacked modals</button>
    </div>
  );
}

export default MultipleModals;
