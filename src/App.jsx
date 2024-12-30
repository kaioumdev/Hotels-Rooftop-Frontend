import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default App
