import React,{useReducer,useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { ParticipantesReducer } from './reducer/ParticipantesReducer';
import ReloadPrompt from './ReloadPromp'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ReloadPrompt />
    <App />
  </React.StrictMode>
)
