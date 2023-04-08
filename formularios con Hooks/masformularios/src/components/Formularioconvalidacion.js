import { useState } from "react";

function FormularioValidado (props){
    const [state, setState] = useState({
        name: '',
        lastName:'',
        email: '',
        password:'',
        confirmPassword: '',

        nameError:'',
        lastError:'',
        emailError:'',
        passError:'',
        confirmError:''
})
function cambioEntrada (ev){
    const nombre_propiedad = ev.target.id
    const nuevaEntrada =  ev.target.value

        setState({
        ...state,
        [nombre_propiedad]: nuevaEntrada

        })
    
        validarFormulario()
}    

function validarFormulario(){
    console.log(state.name);
    if ( state.name.length <= 2 ) {
        state.nameError({
            ...state,
            nameError:  'el campo debe tener al menos 2 caracteres'
        })
    }
    else if (state.name === 'admin') {
        setState({
            ...state,
            nameError: 'Usted no se puede llamar admin'
        })   
    }

    else {
        setState({
            ...state,
            nameError : ''

        })
    }    
    
}

function guardarUsuario (ev){
    ev.preventDefault()
    alert('Usuario Registrado')
}

    return (
        <form onSubmit={guardarUsuario}>
            <h2>Registrese para entrar</h2>
            <div className="form-group">
                <label For="firstName">First Name</label>
                <input onChange={cambioEntrada} type="text" name="firstName"/>
                { state.nameError.length > 0 ?    
                    <p className="error">{setState.nameError}</p> : ''
                }
            </div>
            <div className="form-group">
                <label For="lastName">Last Name</label>
                <input onChange={cambioEntrada} type="text" name="lastName" />
            </div>
            <div className="form-group">
                <label For="Email">Email</label>
                <input onChange={cambioEntrada} type="email" name="email"/>
                
            </div>
            <div className="form-group">
                <label For="password">Password</label>
                <input onChange={cambioEntrada} type="password" name="password" />
            </div>
            <div className="form-group">
                <label For="confirmPassword">Confirm Password</label>
                <input onChange={cambioEntrada} type="password" name="confirmPassword" />
            </div>
                <input type="submit" value="Guardar"></input>            
        </form>
    )
}

export default FormularioValidado;