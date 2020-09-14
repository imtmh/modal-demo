import React from "react";
import Modal from "../Components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    isOpen: true,
    children: true,
    toggleModal: true,
    title: true,
    hideHeader: true,
    hideFooter: true,
    closeButtonLabel: true,
    height: true,
    width: true,
    noOverlay: true
  }
};

const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  title: "Modal"
};
