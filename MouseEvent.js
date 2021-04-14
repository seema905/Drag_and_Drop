import React, { useState } from "react";
import MouseEvent1 from "./MouseEvent1";
export default function MouseEvent() {
  const [theArray, settheArray] = useState([]);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const detailsOfEvent = (e) => {
    if (theArray.length >= 10) {
      theArray.shift();
    } else {
      var value3 = {
        type: e.type,
        clientX: e.clientX,
        clientY: e.clientY,
        pageX: e.pageX,
        pageY: e.pageY,
        shiftKey: e.shiftKey,
        screenX: e.screenX,
        screenY: e.screenY,
      };
      settheArray([...theArray, value3]);
    }
  };
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
  const listenToBodyMouseMoveAdd1 = () => {
   
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundColor: "white",
          flex: 1,
          border: "1px solid red",
          textAlign: "center",
          minHeight: "800px",
          display: "flex",
        }}
      >
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
          onClick={(e) => detailsOfEvent(e)}
          onDoubleClick={(e) => {
            detailsOfEvent(e);
          }}
          onMouseDown={(e) => {
            listenToBodyMouseMoveAdd(e);
            detailsOfEvent(e);
          }}
          onMouseUp={(e) => {
            detailsOfEvent(e);
          }}
          onMouseOver={(e) => detailsOfEvent(e)}
          onMouseLeave={(e) => detailsOfEvent(e)}
          onMouseOut={(e) => detailsOfEvent(e)}
        >
          TEXT1
        </div>
        <MouseEvent1/>
        
      </div>
      <div style={{ flex: 1, backgroundColor: "blue" }}>
        {theArray.map((ele, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "grey",
              margin: "1em",
              color: "white",
              border: "1px solid black",
              display: "flex",
            }}
          >
            <div style={{ margin: "10px" }}>type: {ele.type}</div>
            <div style={{ margin: "10px" }}>clientX: {ele.clientX}</div>
            <div style={{ margin: "10px" }}>clientY: {ele.clientY}</div>
            <div style={{ margin: "10px" }}>pageX: {ele.pageX}</div>
            <div style={{ margin: "10px" }}>shiftKey: {ele.shiftKey}</div>
            <div style={{ margin: "10px" }}>pageY: {ele.pageY}</div>
            <div style={{ margin: "10px" }}>screenX: {ele.screenX}</div>
            <div style={{ margin: "10px" }}>screenY: {ele.screenY}</div>
          </div>
        ))}
      </div>
    </div>
  );
}