import { useState } from "react";


const Pokemon =(props) => {
    
    const [lista, setLista] = useState ([]);
    
    const traerDatos = async () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then(resultado => {
            return resultado.json()
        })
        .then(resultadoJson => {
                console.log(resultadoJson);
                setLista(resultadoJson.results);
            }).catch(error =>{
            
                console.log(error);
        });
    }
        return (

            <div>
                <button onClick={traerDatos}>Buscar Pokemon</button>
                {
                    lista.map((pokemon, index) => {
                        return <p key={index}>{pokemon.name}</p>
                    
                    })
                }
            </div>  
        );

    }


        export default Pokemon;