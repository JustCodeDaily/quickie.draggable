const { useState, useRef, useEffect } = React;

function Draggable() {
 
  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        padding: "16px 20px",
        maxWidth: "220px",
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        cursor: "grab",
        userSelect: "none",
        fontStyle: "italic",
      }}
    >
      “Drag me anywhere. I will remember.”
    </div>
  );
}
