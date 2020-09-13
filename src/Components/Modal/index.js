import React from "react";
import Container from "./Container";
import "./modal.scss";

export default function Modal({ isOpen }) {
  return <Container isOpen={isOpen} />;
}
