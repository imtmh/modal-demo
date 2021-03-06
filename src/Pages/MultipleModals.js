import React, { useState } from "react";
import Modal from "../Components/Modal";

const NUMBER_OF_ITEMS = 10;
function MultipleModals() {
  const [openModals, setOpenModals] = useState({});

  return (
    <header className="App-header">
      {[...Array(NUMBER_OF_ITEMS)].map((item, index) => (
        <RenderButton item={item} index={index} key={index} onClick={() => setOpenModals({ ...openModals, [index + 1]: index + 1 })} />
      ))}

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
      <button onClick={onClick}>Open modal {index + 1}</button>
    </div>
  );
}

export default MultipleModals;
