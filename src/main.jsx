import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import "./css/style.css";
import Routing from './router.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Routing />

  </React.StrictMode>,
)
