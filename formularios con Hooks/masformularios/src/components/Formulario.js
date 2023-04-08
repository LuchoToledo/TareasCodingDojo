import { useState } from "react";

const Formulario = (props) =>{
    const [state, setState] = useState({
        name: '',
        lastName:'',
        email: '',
        password:'',
        confirmPassword: '',
    })
    const [stateTouched, setStateTouched] = useState({
        name: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    })

    const [error, setError] = useState({
        name: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    })


const cambioNombre = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
    setStateTouched({
        ...stateTouched,
        [e.target.name]: true
    })
    getNameError(e.target.name)
}

const guardarUsuario = (ev) => {
    ev.preventDefault()
    if(Object.values(error).includes(true)){
        alert('Revisar Formulario')
    } else {
        alert('Usuario Registrado')
    }

}

const getNameError = (inputName)=> {
    if(state[inputName].length < 2 && stateTouched[inputName]) {
        setError({
            ...error,
            [inputName]: true

        })
    } else {
        setError({
        ...error,
        [inputName]: false
    })
    }
    


} 

    return (
        <form onSubmit={guardarUsuario}>
            <div className="form-group">
                <label For="firstName">First Name</label>
                <input onChange={cambioNombre} name="name" value={state.name} type="text" id="firstName"/>
                {error.name ? 
                <p className="erorr">El nombre al menos debe tener 2 caracteres</p> :''
                }
            </div>
            <div>
                <label For="lastName">Last Name</label>
                <input onChange={cambioNombre} name="lastName" value={state.lastName} type="text" id="lastName" />
                {(state.lastName.length < 2 && stateTouched.lastName) ?
                <p className="erorr">El nombre al menos debe tener 2 caracteres</p> :''
                }
            </div>
            <div>
                <label For="Email">Email</label>
                <input onChange={cambioNombre} name="email" value={state.email} type="email" id="email"/>
                {(state.email.length < 5 && stateTouched.email) ?
                <p className="erorr">El corre debe tener al menos 5 caracteres</p> :''
                }
            </div>
            <div>
                <label For="password">Password</label>
                <input onChange={cambioNombre}  name="password" value={state.password} type="password" id="password" />
                {(state.password.length < 8  && state.confirmPassword !== state.password && stateTouched.password ) ?
                <p className="erorr">la contraseña debe tener al menos 8 caracteres</p> :''
                }
            </div>
            <div>
                <label For="confirmPassword">Confirm Password</label>
                <input onChange={cambioNombre} name="confirmPassword" value={state.confirmPassword} type="password" id="confirmPassword" />
                {(state.confirmPassword.length < 8 && state.confirmPassword !== state.password && stateTouched.confirmPassword) ?
                <p className="erorr">las contraseñas deben coincidir</p> :''
                }
            </div>
                <input type="submit" value="Guardar"></input>            
        </form>
    )
}

export default Formulario;