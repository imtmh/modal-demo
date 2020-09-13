import React from "react";

export default function Container({ isOpen }) {
  const modalClassName = `${isOpen ? "" : "hide-modal"}`;
  return <div className={modalClassName}>Modal Container</div>;
}
