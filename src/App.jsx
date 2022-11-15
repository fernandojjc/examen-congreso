import { useState,useReducer,useEffect } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import reactLogo from './assets/react.svg'
import './App.css'
import Participantes from './pages/Participantes'
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'
import RegistroParticipantes from './pages/RegistroParticipantes'
import { ParticipantesReducer } from './reducer/ParticipantesReducer'
import EditarParticipante from './pages/EditarParticipante'

const init = () => {
  //definimos el localstorage
  const participantes = localStorage.getItem("participantes");
  return participantes ? JSON.parse(participantes) : [];
}

function App() {
  const [state, dispatch] = useReducer(ParticipantesReducer, [], init);
  //agregamos un useEffect
     useEffect(() => {
      //creamos el localstorage
      localStorage.setItem("participantes",JSON.stringify(state))
    }, [state])
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/participantes" element={<Participantes participantes={state} dispatch={dispatch}></Participantes>}></Route>
                <Route path="/registro" element={<RegistroParticipantes dispatch={dispatch}></RegistroParticipantes>}></Route>
                <Route 
                  path="/editar/:id/:pNombre/:pPrimerApellido/:pSegundoApellido/:pEmail/:pUsuarioTwitter/:pVAvatar/:pTerminos" 
                  element={<EditarParticipante 
                  dispatch={dispatch}></EditarParticipante>}></Route>
                <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>      
            </Routes>
          </BrowserRouter>
     
    </div>
  )
}

export default App
