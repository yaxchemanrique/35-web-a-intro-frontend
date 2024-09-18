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

function App2() {
  return (
    <ul>
      {data.map((card) => (
        <Card fullName={card.fullName} job={card.job} email={card.email} />
      ))}

      {/* <Card
        fullName={data[0].fullName}
        job={data[0].job}
        email={data[0].email}
      /> */}
    </ul>
  );
}
export default App2;
