import React from "react";
import Body from "./Body";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

import "./modal.scss";

export default function Modal({ isOpen, children, toggleModal, title, hideHeader, hideFooter, closeButtonLabel, height, width, noOverlay }) {
  return (
    <Container isOpen={isOpen} children={children} height={height} width={width} noOverlay={noOverlay}>
      {!hideHeader && <Header title={title} toggleModal={toggleModal} />}

      <Body>{children}</Body>

      {!hideFooter && <Footer toggleModal={toggleModal} closeButtonLabel={closeButtonLabel} />}
    </Container>
  );
}
