import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailComponent from "../Detail.component";

export default function PersonPage(props){
    let [character, setCharacter] = useState(null);
    let [world, setWorld] = useState(null);
    let {name : characterName, ...characterData} = character || {};
    let {name : worldName, ...worldData } = world || {};
    const { id } = useParams();
    const navigate = useNavigate();

    const getHomeworld = (url)=> {
        axios.get(url)
            .then((response)=> {
                setWorld(response.data);
            })
            .catch((error) => {
                setWorld(null);
                navigate("/error");
            });
    }

    useEffect(()=>{
        var reg = /^\d+$/;
        if (id && reg.test(id)){
            axios.get(`https://swapi.dev/api/people/${id}`)
                .then((response)=> {
                    setCharacter(response.data);
                })
                .catch((error) => {
                    setCharacter(null);
                    navigate("/error");
                });
        }
    },[]);

    useEffect(()=>{
        if (character)
            getHomeworld(character['homeworld']);
    }, [character]);

    return (
        <div>
            { character && <DetailComponent 
                mainAttr={characterName} 
                attributes={characterData}
            />}
            { world && <DetailComponent 
                mainAttr={worldName} 
                attributes={worldData}
            />}
        </div>)
    
}