import { Outlet } from 'react-router-dom'

// Components
import NavBar from './components/NavBar'

import {ToastContainer} from 'react-toastify';

//estilos
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

function App() {  
  return (
    <div className='App'>
      <ToastContainer />
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
