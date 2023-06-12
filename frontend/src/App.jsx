import { Outlet } from 'react-router-dom'
import Secao from './components/Secao'
// Components
import NavBar from './components/NavBar'
import Rodape from './components/Rodape'
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
      <Rodape />
      
    </div>
  )
}

export default App
