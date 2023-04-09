import { useState } from "react";
import axios from "axios";

const Pokemones = () => {
    
    const [poke,setPoke] = useState ([])

    const  cargarPokemones = async () =>{
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
                
        setPoke(response.data.results)

        console.log(response)
    }
    
    return (
        <div>
            <div>
                <h3>Lista de pokemones</h3>
                <button onClick={cargarPokemones}>lista de Pokemon</button>
                    {
                    poke.length > 0  && poke.map ((pokemones,index)=> {
                            return(
                            <div key={index}>
                                    <ul>
                                        <li>
                                            {pokemones.name}
                                        </li>                                        
                                    </ul>

                                    </div>
                            )
                        })          
                    }
            </div>    
        </div>
    )
}

export default Pokemones;