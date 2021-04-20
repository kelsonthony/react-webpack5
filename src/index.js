import soma from './calc'
import Heading from './components/heading'

console.log('Testing the webpack 2')

soma(2, 4)
soma(5, 5)

//Loaders
const heading = new Heading()

heading.create('Titulo dinamico')