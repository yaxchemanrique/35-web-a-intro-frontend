// CommonJs
const pathNode = require('node:path');

module.exports = {
  // Esta es el default...
  // entry: './src/index.js' 
  output: {
    // filename: 
    // path: '/Users/yaxche/DevF/repo-clases/35-web-a-intro-frontend/1-bundlers/webpack/build'
    path: pathNode.resolve( __dirname, 'build2')
  }
}