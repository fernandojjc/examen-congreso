import React,{useReducer,useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Participante from '../components/participante/Participante'
import { ParticipantesReducer } from '../reducer/ParticipantesReducer'
import { v4 as uuid } from 'uuid';
import './RegistroParticipantes.css'
import {useNavigate} from 'react-router-dom'

const RegistroParticipantes = ({dispatch}) => {
    const [data, setData] = useState({nombre:"",primerApellido:"",segundoApellido:"",email:"",usuarioTwitter:"",avatar:"",terminos:"Si"});
    const {nombre,primerApellido,segundoApellido,email,usuarioTwitter,avatar,terminos} = data;
    
    const navigate = useNavigate();
    //Creamos el reducer utilizando el hook useReducer y panadole el reducer y un initialstate
    
      
  
     //Definiendo el action para el dispatch el cual necesita un type y un payload
     const actionAdd = {
          type: "add",
          payload:{
              id: uuid(),
              nombre,
              primerApellido,
              segundoApellido,
              email,
              usuarioTwitter,
              avatar,
              terminos
          }
      }
  
      //agregamos el hanldechange para los campos nombre y telefono
      const handleChange = (e)  =>{
          setData({
              ...data,
              [e.target.name]: e.target.value
          })
      }
      
    const handleChangeTermino = ()  =>{
        console.log(document.querySelector('input[name="terminos"]:checked'));
        setData({
            ...data,
            ["terminos"]: document.querySelector('input[name="terminos"]:checked') ? "Si":"No"
        })
    }

    const handleChangeAvatar = ()  =>{
        //console.log(document.querySelector('input[name="flexRadioDefault"]:checked').value);
        setData({
            ...data,
            ["avatar"]: document.querySelector('input[name="flexRadioDefault"]:checked') ? document.querySelector('input[name="flexRadioDefault"]:checked').value :"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
        })
    }

       //Metodo paras manejar el evento del boton agregar
    const handleAdd =() => {
      
        const vTerminos = document.getElementById('terminos').checked;
        //console.log(document.querySelector('input[name="terminos"]'));
        //let vAvatar = document.querySelector('input[name="flexRadioDefault"]:checked').value;
       
          /*if(vSexo == "Masculino"){        
            setData({
              ...data,
              ["sexo"]: "Masculino"
            })
          }else{
            setData({
              ...data,
              ["sexo"]: "Femenino"
            })
          }*/
         
          dispatch(actionAdd);
          console.log(
            nombre+ "-"+
            primerApellido+ "-"+
            segundoApellido+ "-"+
            email+"-"+
            usuarioTwitter+"-"+
            avatar  +"-"+
            terminos
          );
            navigate("/participantes");
          /*setData({
            ...data,
            ["nombre"]: "",
            ["telefono"]: "",
            ["fechaNacimiento"]: "",
            ["edad"]:"",
            ["imagen"]:""
            
          })*/
    }   
    
  
   
  

  return (
    <div>
        <Navbar></Navbar>
       <div className='row  col-md-12 col-sm-8 col-lg-8 bg-white mx-auto my-4 p-4'>
            <h2>Registrar un usuario</h2>
            
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <label htmlFor="nombre">Nombre:</label>
                    <input onChange={handleChange} value={nombre} type="text" className="form-control" id="nombre" placeholder="Introduce nombre" name="nombre"/>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <label htmlFor="primerApellido">Primer apellido:</label>
                    <input onChange={handleChange} value={primerApellido} type="text" className="form-control" id="primerApellido" placeholder="Introduce primer Apellido" name="primerApellido"/>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <label htmlFor="segundoApellido">Segundo apellido:</label>
                    <input onChange={handleChange} value={segundoApellido} type="text" className="form-control" id="segundoApellido" placeholder="Introduce segundo Apellido" name="segundoApellido"/>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} value={email} type="email" className="form-control" id="email" placeholder="Introduce email" name="email"/>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <label htmlFor="twitter">Twitter:</label>
                    <input onChange={handleChange} value={usuarioTwitter} type="text" className="form-control" id="twitter" placeholder="Introduce twitter" name="usuarioTwitter"/>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 my-3 text-center">
                    <img className='img-sizes-avatar' src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"></img>
                    <div className="form-check">
                        <input onChange={handleChangeAvatar} className="form-check-input"
                             type="radio"
                             name="flexRadioDefault"
                             id="flexRadioDefault1"
                             value="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                             />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Avatar 1
                        </label>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 my-3 text-center">
                    <img className='img-sizes-avatar' src="http://cdn.onlinewebfonts.com/svg/img_569204.png"></img>
                    <div className="form-check ms-auto">
                        <input onChange={handleChangeAvatar} className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="http://cdn.onlinewebfonts.com/svg/img_569204.png"
                          />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Avatar 2
                        </label>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 my-3 text-center">
                    <img className='img-sizes-avatar' src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"></img>
                    <div  className="form-check">
                        <input onChange={handleChangeAvatar}
                         className="form-check-input" 
                         type="radio" 
                         name="flexRadioDefault" 
                         id="flexRadioDefault1" 
                         value="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
                         />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Avatar 3
                        </label>
                    </div>
                </div>
                <div className="checkbox mb-4">
                <label><input onChange={handleChangeTermino} type="checkbox" name="terminos" id='terminos' />  Acepto términos y condiciones</label>
                </div>
                <button type="button" className="btn btn-success" onClick={handleAdd}>Guardar</button>
          
       </div>
    </div>
  )
}

export default RegistroParticipantes