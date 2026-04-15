import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const myelement = (
  <>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>John</td>
        <td>30</td>
      </tr>
    </table>
    <>
      <h1>Hello React!</h1>
      <p>welcome</p>
    </>
  </>
)


createRoot(document.getElementById('root')).render(
  myelement
)
