import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

const username = 'Armando'

/* const element = (
  <h1>Hola {username} {username} String de texto</h1>
) */

const shoppingList = ['manzanas', 'platanos', 'melón', 'mango', 'sandía']
// Esto es JS (afuera de los elementos)

//  const element = ( //JSX, dentro de los paréntesis
//   <p>No de {/* HOLA! */} cosas restantes por comprar: {shoppingList.length} </p>
// ) 

const mi_id = 'input-texto'
const element = (
  <input id={mi_id} required={true} type='text'></input>
)


/* const element = React.createElement(
  'h1',
  {}, //class, id, href...
  'Hola ',
  username,
  username,
  'String de texto',
  mi_id
) */

createRoot(document.getElementById('root')).render(
  element
)