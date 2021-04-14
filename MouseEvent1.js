import React, { useState } from "react";
export default function MouseEvent1() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const position = (e) => {
    setTop(e.pageY);
    setLeft(e.pageX);
  };
  const position1 = (e) => {
    document.removeEventListener("mousemove", position, true);
  };
  const listenToBodyMouseMoveAdd = () => {
    document.addEventListener("mousemove", position, true);
    console.log("down");
    document.addEventListener("mouseup", position1, true);
  };
  return (
    <div
      style={{
        padding: "10px",
        color: "white",
        fontWeight: 700,
        fontSize: "50px",
        backgroundColor: "gray",
        position: "relative",
        width: 150,
        height: 150,
        top: top,
        left: left,
      }}
      onMouseDown={(e) => {
        listenToBodyMouseMoveAdd(e);
      }}
    >
      TEXT2
    </div>
  );
}