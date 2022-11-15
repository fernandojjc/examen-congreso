import React, {useState} from 'react'
import './Participante.css'
import {Link, NavLink,useNavigate} from 'react-router-dom'

const Participante = ({id,nombre,primerApellido,segundoApellido,email,usuarioTwitter,avatar,vAvatar,terminos}) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = () =>{
    setUser("logged")
  }

  const clickedAvatar=( )=>{
    login();
    if(!user){
      navigate(`/editar/${id}/${nombre}/${primerApellido}/${segundoApellido}/${email}/${usuarioTwitter}/${vAvatar}/${terminos}`);
    }else{
      navigate("/");
    }
  }

  const logOut = ()=> {setUser(null)};

  return (
    <div className='col-lg-3 col-md-3 mx-3 my-3'>
          <div className="card-comp">
          
           
              <img onClick={clickedAvatar} className='img-sizes' src={avatar}  alt="Avatar" />
           
           
            <div className="container-comp">
                
                <h4>
                  
                
                
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png' className='img-sizes-twitter'></img>
              
                  <b>{usuarioTwitter}</b></h4> 
                <p>{nombre} {primerApellido}</p> 
            </div>
        </div>
    </div>
  )
}

export default Participante