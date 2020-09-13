import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
export default function Container({ isShown, noHeader, noFooter, noCloseButton, header, footer, body }) {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
