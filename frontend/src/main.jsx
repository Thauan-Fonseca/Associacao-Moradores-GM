import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Cliente from './routes/Cliente.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//pages
import Home from './routes/Home.jsx';
import CreateCliente from './routes/CreateCliente.jsx'
import EditCliente from './routes/EditCliente.jsx';
import Sobre from './routes/Sobre.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/clientes/new',
        element: <CreateCliente />
      },
      {
        path: '/sobre',
        element: <Sobre />
      },
      {
        path: '/cliente/:id',
        element: <Cliente />
      },
      {
        path: '/cliente/edit/:id',
        element: <EditCliente />
      },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
