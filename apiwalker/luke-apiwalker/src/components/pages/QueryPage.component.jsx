import { useState } from "react"
import { useNavigate } from "react-router-dom";
import DetailComponent from "../Detail.component";




export default function QueryPage(props){
    let [resources, setResources] = useState("films");
    let [id, setId] = useState("");
    let [resource] = useState(null); 
    const navigate = useNavigate();



    const submitData = () => {
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