import { listContainer, header } from './components'

const sourceData = [
  { firstName: 'Mickey', lastName: 'Mouse' },
  { firstName: 'Minnie', lastName: 'Mouse' }
]

const listItems = sourceData
  .map(person => `<li>${person.firstName} ${person.lastName}</li>`)
  .join('\n')

const app = document.createElement('div')
app.className = 'app'
app.append(header('Webpack Demo'))
app.append(listContainer(listItems))

const rootElement = document.getElementById('root')
rootElement.append(app)
