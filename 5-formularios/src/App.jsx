import React from "react";

function App() {
  const [searchTerm, setSearchTerm] = React.useState(""); //undefined
  const [tyc, setTyc] = React.useState();

  return (
    <>
      <form>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          onChange={(event) => {
            // console.log(event)
            setSearchTerm(event.target.value);
          }}
          value={searchTerm}
        />

        <fieldset>
          <legend>Estás de acuerdo con los TyC?</legend>

          <input
            type="radio"
            name="tyc"
            id="si"
            checked={tyc === 'si'}
            onChange={(event) => {
              setTyc(event.target.value);
            }}
            value="si"
          />

          <label htmlFor="si">sí</label>
          <br />
          <input
            type="radio"
            name="tyc"
            id="no"
            checked={tyc === 'no'}
            onChange={(event) => {
              setTyc(event.target.value);
            }}
            value="no"
          />
          <label htmlFor="no">no</label>
        </fieldset>
      </form>
      <p>Buscaste: {searchTerm}</p>
      <button onClick={() => setSearchTerm("patines")}>Busca 'Patines'</button>
      <button onClick={() => setTyc("no")}>No acepto Los TyC</button>
    </>
  );
}

export default App;
