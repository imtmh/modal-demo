import React from "react";

export default function Footer({ toggleModal, title }) {
  return (
    <div className="header">
      <label>{title}</label>
      <a
        href="void"
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
      >
        x
      </a>
    </div>
  );
}
