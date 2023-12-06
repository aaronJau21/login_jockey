import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position='top-right' style={{ top: '80px', fontSize: '12px' }} />
  </React.StrictMode>,
)
