import  React from 'react';
import './App.css';
import SumaUno from './components/SumaUno';


function App() {
  return (
    <div className="App">
      <SumaUno firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'Black'} />
      <SumaUno firstName={'John'} lastName={'Smith'} age={88} hairColor={'Brown'} />
      <SumaUno firstName={'Millard'} lastName={'Fillmore'} age={50} hairColor={'Brown'} />
      <SumaUno firstName={'Maria'} lastName={'Smith'} age={62} hairColor={'Brown'}/>
      
    </div>
  );
}



export default App;
