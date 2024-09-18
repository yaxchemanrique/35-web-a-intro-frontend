import React from "react";

/* function Saludo(props) {
  // console.log(props)
  return (
    <div>Hola, {props.firstName}!</div>
  )
}*/

/* function Saludo({ firstName = 'estudiante' }) {
  return (
    <div
      style={{
        fontSize: "1.5rem",
        textAlign: "center",
        color: "sienna",
      }}
    >
      Hola, {firstName}!
    </div>
  );
} */

//* Operador Nullish
// ?? -> null, undefined

function Saludo({ firstName }) {
  return (
    <div
      style={{
        fontSize: "1.5rem",
        textAlign: "center",
        color: "sienna",
      }}
    >
      Hola, {firstName ?? 'estudiante'}!
    </div>
  );
}

/* //* Operador 'OR / O'
//La peor opción
// || -> 0, null, NaN, undefined, ''
function Saludo({ firstName}) {
  return (
    <div
      style={{
        fontSize: "1.5rem",
        textAlign: "center",
        color: "sienna",
      }}
    >
      Hola, {firstName  || 'estudiante'}!
    </div>
  );
} */

export default Saludo;
