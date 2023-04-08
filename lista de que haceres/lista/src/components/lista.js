import {  useState } from "react";
import  './lista.css';

const Tareas = () => {
    const [listaTareas, setListaTareas] = useState(
    

        [
            {
                nombre:"a",
                terminada: true
            },
            {
                nombre:"b",
                terminada: false
            },
        ]
    );

    const [nombre, setNombre] = useState ("");

    
    const agregar = (e) => {
        e.preventDefault();
        var listaTemp = [...listaTareas];
        
        var listaObjetos ={
            nombre: nombre,
            terminada: false
        }
        
        listaTemp.push(listaObjetos);

        setListaTareas(listaTemp);
        setNombre("");
    }

    const escribiendo = (e) =>{
        setNombre(e.target.value);
    }

    const eliminar = (index) =>{
        var listaTemp = [...listaTareas];
        console.log("Antes", listaTemp)
        listaTemp.splice(index, 1);
        console.log("Despúes",listaTemp);

        setListaTareas(listaTemp);

    }

    const chequeo = (index) => {
        var listaTemp = [...listaTareas];
        var nuevoValor =( listaTemp[index].terminada === true) ? false : true;
        listaTemp[index].terminada = nuevoValor;
        setListaTareas(listaTemp);
        
    }


    return(
        <div>
            <form onSubmit={agregar}>
                <input type="text" name="nombre" id="nombre" required={true} placeholder="Ingresa Accion" value={nombre} onChange={(e)=> escribiendo (e)}/>
                <button type="submit">Agregar</button>
            </form>
                <hr/>
                <div>
                    {
                        listaTareas.map((task,index) => {
                            return <div key={index}> 
                                {task.terminada ? "Terminada" : "No terminada"}
                                <input type={"checkbox"} checked={task.terminada} onChange ={() => chequeo(index)}/>  
                                <p className={(task.terminada) ? "tachado" : ""}>Tarea Agregada:  {task.nombre}</p>  
                                <button onClick={() => eliminar(index)}>Eliminar</button>
                            </div>
                        })
                    }
                </div>
        </div>
    );

}

export default Tareas;