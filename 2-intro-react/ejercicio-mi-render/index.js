function render(element, container) {
  // código aquí 

}

const element = {
  type: 'a',
  props: {
      href: 'https://react.dev/',
  },
  children: 'Leer más acerca de React',
};

const container = document.querySelector('#root');

render(element, container);

/* 
const tipoDeElemeto = 'div'
const tareaNueva = document.createElement(tipoDeElemeto)
tareaNueva.textContent = "Estudiar React"
// console.log(tareaNueva)
const contenedor = document.querySelector('.contenedor')
contenedor.appendChild(tareaNueva)
 */
