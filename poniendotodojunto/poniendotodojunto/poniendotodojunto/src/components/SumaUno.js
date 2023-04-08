import { useState } from "react";


const SumaUno = props => {
    const { firstName, lastName, age, hairColor} = props;
    const [state, setState] = useState({clickCount: age});

    const sumar = e =>{
        console.log(state)
        setState({
            clickCount: state.clickCount + 1
        })
    }  
   
    return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {state.clickCount}</p>
                <p>Hair color: {hairColor}</p>
                <button onClick={sumar}>boton de cumpleaños {firstName}</button>
            </div>
        )
        
    
}

    
    export default SumaUno;