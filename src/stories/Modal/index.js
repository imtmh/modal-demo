import React from "react";
import PropTypes from "prop-types";
import "./modal.css";
import { Button } from "../Button";
import Container from "./Container";
/**
 * Primary UI component for user interaction
 */

export const Modal = ({ ...props }) => {
  return (
    <div>
      <Button label="Launch Modal"></Button>
      <Container></Container>
    </div>
  );
};

Modal.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Modal contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

Modal.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined
};
