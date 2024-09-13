import { StrictMode } from 'react'
// import React from 'react';
import { createRoot } from 'react-dom/client'

/* const element = React.createElement(
  'h1',
  {id: 'header-1'},
  'Hola Mundo!'
) */

/* const element = React.createElement(
  'div',
  {id: 'container'},
  // hijos
  React.createElement(
    'p',
    {class: 'parrafo'},
    'este es el párrafo 1',
    React.createElement(
      'a',
      {class: 'link',
        href: 'https://google.com'
      },
      'y esto va a google'
    )
  ),
  React.createElement(
    'p',
    {},
    'párrafo 2'
  )
) */

const element = (
  <div class='container'>
    <p class='parrafo'>
      Este es el párrafo 1
      <a href='https://google.com'>y esto va a google</a>
    </p>
    <p>Este es el párrafo 2</p>
  </div>
);

/* const element = <div class='container'>
    <p class='parrafo'>
      Este es el párrafo 1
      <a href='https://google.com'>y esto va a google</a>
    </p>
    <p>Este es el párrafo 2</p>
  </div>

const firstName = (
  'Yaxche'
);

const firstName1 = 'Yax' */


const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);