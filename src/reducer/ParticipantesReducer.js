//Definimos el reducer de contactos como una arrow funciton que recibe solo 
//dos parametros que son: un state y un action.

export const ParticipantesReducer = (state,action) => {
    switch(action.type){
        case "add":
            //payload contienen la informacion y e sun objeto con los nuevos datos.
            return [...state, action.payload] 
        case "delete":
            //filtra el state con toos los datos menos en donde coincida con el id seleccionado
            return state.filter((actual)=>actual.id !== action.payload);    
     
        default:
            return state;
    }
};
