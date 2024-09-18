import React from "react";

/* function Button({contenido}) {
  return (
    <button>{contenido}</button>
  )
} */

function Button({ children }) {
  return (
    <button
      style={{
        background: "goldenrod",
        borderRadius: "1rem",
        color: "white",
        border: "none",
        margin: "0.5rem",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
