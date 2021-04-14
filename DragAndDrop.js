import React, { useState } from "react";
export default function DragAndDrop() {
  const [left, setleft] = useState(0);
  const [top, settop] = useState(0);
  function myFunction()
    {
            
    }
  return (  
    <div>
      <div
        style={{
          position:"relative",
          backgroundColor: "gray",
          top: top + "px",
          left: left + "px",
          width: 200,
          height: 200,
          border: "1px solid red",
          draggable:"true"
        }}
      >
        HI
      </div>
      <div>
        <input
          type="number"
          value={left}
          onChange={(e) => setleft(e.target.value)}
        />
        <br />
        <div  ondrag={(event)=>myFunction}>Drag me!</div>
        <input
          type="number"
          value={top}
          onChange={(e) => settop(e.target.value)}
        />
      </div>
    </div>
  );
}