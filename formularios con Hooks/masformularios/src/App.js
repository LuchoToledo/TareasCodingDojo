import React, {useState} from 'react';
import "./App.css";
import Formulario from "./components/Formulario";



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
      <Formulario title="Registro con Validacion"/>
    
    </div>
  );
}
export default App;
