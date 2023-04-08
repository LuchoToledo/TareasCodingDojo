import React from "react";

const Respuestas = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.data;
    return(
        <div>
            <h2>Resultados</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p type="password">Password : {password}</p>
            <p type="password">Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default Respuestas;