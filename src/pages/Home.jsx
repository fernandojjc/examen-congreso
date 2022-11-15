import React,{useReducer,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import { ParticipantesReducer } from '../reducer/ParticipantesReducer'
import ImgUtl from '../assets/Tics.png'
import ImgLogo from '../assets/logo.png'


const Home = () => {
 
  return (
    <div className='row'>
    <div className='col-md-12 col-lg-12 col-sm-12 p-4'>
      <h1 className='text-center title h-mod'>Congreso Nacional de Tecnologías de la Información y Comunicación</h1>
      <hr className='title'></hr>
    </div>
    <div className='card cards col-md-5 my-1 col-lg-5 col-sm-12 mx-auto'>
      <div className='mx-auto text-center p-2'>
      <img className='img-fluid mt-5 ' src={ImgLogo}></img>
      <h2>Congreso de Tecnologías de la Información</h2>
      <NavLink to="/participantes" className='btn btn-lg btn-outline-primary'>Entrar</NavLink>
      </div>
    </div>
    <div className='card cards col-md-5 my-1 col-lg-5 col-sm-12 mx-auto'>
      <div className='text-center p-2'>
        <img className='img-fluid mt-5 ' src={ImgUtl}></img>
        
      </div>
    </div>
  </div>
  )
}

export default Home