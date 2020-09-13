import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

import "./modal.scss";

export default function Modal({ isOpen, children, toggleModal, title, hideHeader, hideFooter, closeButtonLabel }) {
  const modalClassName = `modal ${isOpen ? "" : "hide"}`;
  return (
    <div className={modalClassName}>
      <section className="container">
        <Header title={title} toggleModal={toggleModal} />

        <Body>{children}</Body>
        <Footer toggleModal={toggleModal} closeButtonLabel={closeButtonLabel} />
      </section>
    </div>
  );
}
