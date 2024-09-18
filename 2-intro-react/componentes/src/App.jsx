import React from "react";
import Saludo from "./components/Saludo.jsx";
import Button from "./components/Button.jsx";

//rfce

function App() {
  return (
    <header>
      <h1>App</h1>
      <h2>App</h2>
      <hr />
      {/* <Saludo firstName='Yaxche' lastName='Manrique' insta='@yaxche'/> */}
      <Saludo firstName="Yaxche" />
      <Saludo firstName="Ronald" />
      {/* defaultProps */}
      <Saludo />
      <hr />
      <Button>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
      </Button>
      <Button>
        Boton numero 2
      </Button>
      <Button>
        Boton numero 3
      </Button>
    </header>
  );
}

/* function sayHello(name) {
  console.log(`Hola ${name}`)
}

sayHello('Yaxche')
sayHello('Ronald') */

export default App;
