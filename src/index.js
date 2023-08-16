import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Configurando o React Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from './components/Card/Card'
import Home from './routes/Home'
import Pix from './components/Pix/Pix'
import Transf from './components/Transferencia/Transfer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "pix",
        element: <Pix />
      },
      {
        path: "card",
        element: <Card />
      },
      {
        path: "transferencia",
        element: <Transf />
      }
    ] 
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
