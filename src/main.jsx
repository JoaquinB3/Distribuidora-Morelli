import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './routes/App';
import ErrorPage from './routes/ErrorPage';
import Productos from './routes/Productos';
import Clientes from './routes/Clientes';
import MainTablero from './components/MainTablero';
import CajaDiaria from './routes/CajaDiaria';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainTablero/>
      },
      {
        path: "/productos",
        element: <Productos />
      },
      {
        path: "/clientes",
        element: <Clientes/>
      },
      {
        path: "/cajaDiaria",
        element: <CajaDiaria/>
      }

    ],
  },
  
]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

