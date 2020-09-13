import React from "react";

export default function Body({ children }) {
  return (
    <>
      <hr></hr>
      <div className="body">{children}</div>
    </>
  );
}
