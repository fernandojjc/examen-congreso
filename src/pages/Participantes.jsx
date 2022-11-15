import React,{useReducer,useState} from 'react'
import Navbar from '../components/Navbar'
import Participante from '../components/participante/Participante'
import { ParticipantesReducer } from '../reducer/ParticipantesReducer'

const init = () => {
  //definimos el localstorage
  const participantes = localStorage.getItem("participantes");
  return participantes ? JSON.parse(participantes) : [];
}

const Participantes = ({participantes=[],dispatch}) => {
  

  return (
    <div>
      <Navbar></Navbar>
      <div className='col-sm-12 col-lg-8 col-md-8 mx-auto mt-3 ps-5 row'>
          
      {
                participantes.map((p)=>
                   {
                    const noAvatar = p.avatar;
                    let vAvatar = 0;
                    switch (noAvatar) {
                      case "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png":
                        vAvatar = 1;
                        break;
                      case "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png":
                        vAvatar = 2;
                        break;
                    
                      default:
                        vAvatar = 3;
                        break;
                    }
                    return (
                       <Participante key={p.id} id={p.id} nombre={p.nombre} primerApellido={p.primerApellido} segundoApellido={p.segundoApellido} email={p.email} usuarioTwitter={p.usuarioTwitter} avatar={p.avatar} vAvatar={vAvatar} terminos={p.terminos}></Participante>
                    )
                   }
                )
            }
         
        </div>
    </div>
  )
}

export default Participantes