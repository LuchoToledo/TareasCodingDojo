// 6157f0c69d9f58730a07f04e8c7445f2

//import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import DetailComponent from "../Detail.component";



//     "films": "https://swapi.dev/api/films/",
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "species": "https://swapi.dev/api/species/",
//     "starships": "https://swapi.dev/api/starships/",
//     "vehicles": "https://swapi.dev/api/vehicles/"


export default function QueryPage(props){
    let [resources, setResources] = useState("films");
    let [id, setId] = useState("");
    let [resource] = useState(null); 
    const navigate = useNavigate();

    // resource: Respuesta de la API, es decir un objeto
    // {   
    //  title | name
    //  ...
    // }
    //  

    const submitData = () => {
       // var reg = /^\d+$/;
        //if (id && reg.test(id)){
          //  axios.get(`https://swapi.dev/api/${resources}/${id}`)
            //    .then((response)=> {
              //      setResource(response.data);
               // })
               // .catch((error) => {
                //    setResource(null);
                  //  navigate("/error");
                //})
        //}
        navigate(`/${id}`);
    
    }
    
    let {name, title, ...rest} = resource || {};
    return (
        <div>
            <form onSubmit={(event) => {
                    event.preventDefault();
                    submitData();
                }}>
                <label>Search for:</label>
                <select name="resources" onChange={(event) => {
                    setResources(event.target.value);
                }} value={resources}>
                    <option value="films"> Films </option>
                    <option value="people"> People </option>
                    <option value="planets"> Planets </option>
                    <option value="species"> Species </option>
                    <option value="starships"> Starships </option>
                    <option value="vehicles"> Vehicles </option>
                </select>
                <label>id:</label>
                <input type="text" name="id" value={id}  onChange={(event)=> {
                    setId(event.target.value);
                }} />
                <input type="submit" value="Search" />
            </form>
            <div>
                { resource &&
                <DetailComponent 
                    mainAttr={resource["title"] ? resource["title"] : resource["name"]} 
                    attributes={rest}
                /> }
            </div>
        </div>
    )
}