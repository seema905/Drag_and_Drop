import React ,{useState} from "react";
export default function Event() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  // dragElement(document.getElementById("div"));

    function dragMouseDown(e) {
      console.log("mouse down")
      e = e || window.event;
      e.preventDefault();
      document.body.addEventListener('mousemove' ,elementDrag(e))
      pos3 = e.pageX;
      pos4 = e.pageY;
      function elementDrag(e) {
        console.log("move")
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        // pos1 = pos3 - e.clientX;
        // pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
       pos4 = e.clientY;
        // top = elmnt.offsetTop - pos2 + "px";
        // elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        setTop(pos3)
        setLeft(pos4)
      
    }
    
    
  }
    function closeDragElement() {
      console.log("mouseup")
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  

  return (
    <div
      id="div"
      style={{
        padding: "5px",
        width: "60px",
        position: "absolute",
        border: "1px solid black",
        backgroundColor: "gray",
        color: "White",
        top:top,
        left:left
      }}
       onMouseDown={dragMouseDown}
       onMouseUp={closeDragElement}
       
    >
      Element
    </div>
  );
}
