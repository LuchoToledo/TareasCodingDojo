import  { React} from 'react';




const Apoyarlo = (props) => {
    var { firstName, lastName, age, hairColor} = props;
    return(
        <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair color: {hairColor}</p>
            
        </div>

    )

}


export default Apoyarlo;
