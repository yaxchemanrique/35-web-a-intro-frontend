import React from "react";
import Card from "./components/Card.jsx";

/* function App2() {
  return (
    <React.Fragment>
      <div>App2</div>
      <div>App2</div>
    </React.Fragment>
  );
} */

/* function App2() {
  return (
    <>
      <div>App2</div>
      <div>App2</div>
    </>
  )
} */

/* const frutas = ['manzanas', 'peras', 'piñas'];

function App2() {
  return (
    <ul>
      {frutas.map((fruta) => (
        <li>{fruta}</li>
      ))}
    </ul>
  )
} */

const data = [
  {
    id: "sunita-abc123",
    fullName: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
  {
    id: "henderson-def456",
    fullName: "Henderson G. Sterling II",
    job: "Receptionist",
    email: "henderson-the-second@acme.co",
  },
  {
    id: "aio-ghi789",
    fullName: "Aoi Kobayashi",
    job: "President",
    email: "kobayashi.aoi@acme.co",
  },
];

/* function App2() {
  return (
    <ul>
      {data.map((card) => (
        <Card
          key={card.id}
          fullName={card.fullName}
          job={card.job}
          email={card.email}
        />
      ))}

      <Card
        fullName={data[0].fullName}
        job={data[0].job}
        email={data[0].email}
      />
    </ul>
  );
} */

/* function App2() {
  return (
    <div>
    {[<h1>Hola</h1>, <h2>mundo</h2>, <p>!</p>]}
    </div>
  )
} */

//Cheat sheet de lo que se ve y no se ve
/* function App2() {
  return (
    <>
      <ul>
        <li>false: {false && 'hola'}</li>
        <li>undefined: {undefined}</li>
        <li>undefined: {undefined && 'hola'}</li>
        <li>null: {null}</li>
        <li>null: {null && 'hola'}</li>
        <li>NaN: {NaN}</li>
        <li>Cero: {0}</li>
        <li>String Vacío: {""}</li>
      </ul>
      <ul>
        <li>true: {true && 'hola'}</li>
        <li>Numero: {6}</li>
        <li>String: {"hola"}</li>
      </ul>
    </>
  );
} */

function App2() {
  let isLoggedIn = false
  return (
    <p>
      {isLoggedIn ? 'Está loggeado' : 'No está loggeado'}
    </p>
  )
}

export default App2;
