import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <navbar>
        <h1>Header</h1>
      </navbar>
      <Outlet></Outlet>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default App
