import React from "react";



const SumaUno = props => {
    const { firstName, lastName, age, hairColor} = props;
    
    return(
            <div>
                <ul>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {age}</p>
                    <p>Hair color: {hairColor}</p>
                </ul>
            </div>
        )
        
    
}

    
    export default SumaUno;