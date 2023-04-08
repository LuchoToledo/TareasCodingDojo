import  { React} from 'react';
import state from './SumaUno';



const Apoyarlo = (props) => {
    var { firstName, lastName, age={age}, hairColor} = props;
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
            <button onClick={state.clickCount}>Age{state}</button>
        </div>
    )

}


export default Apoyarlo;
