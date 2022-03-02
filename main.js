import data from './students.json'
import './style.css'

document.querySelector('#app').innerHTML = `
  <code><pre>${JSON.stringify(data, null, 2)}</pre></code>
`
