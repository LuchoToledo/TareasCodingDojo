import React, {useState} from 'react';
import Formulario from "./components/Formulario";
import Respuestas from "./components/Respuestas";


function App() {
  const [state, setState] = useState({
      firstName:"",
      lastName: "",
      email:"",
      password:"",
      confirmPassword:""
  });

  return (
    <div className="App">
    <Formulario imputs={state} setInputs={setState}/>
    <Respuestas data={state}/>
    </div>
  );
}
export default App;
