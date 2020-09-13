import React from "react";

export default function Footer({ toggleModal, closeButtonLabel }) {
  return (
    <>
      <hr></hr>
      <div className="footer">
        <button onClick={toggleModal}>{closeButtonLabel || "Close"}</button>
      </div>
    </>
  );
}
