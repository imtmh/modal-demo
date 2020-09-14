import React from "react";

import "./modal.scss";

export default function Container({ isOpen, children, height, width, noOverlay }) {
  const modalClassName = `${isOpen ? "" : "hide"}`;
  const heightStyle = !!height ? { height: `${height}%` } : {};
  const widthStyle = !!width ? { width: `${width}%` } : {};

  const bodyRenderer = (
    <section className="container" style={{ ...heightStyle, ...widthStyle }}>
      {children}
    </section>
  );

  return (
    <div className={"modal " + modalClassName} style={{ position: noOverlay ? "static" : "fixed" }}>
      {bodyRenderer}
    </div>
  );
}
