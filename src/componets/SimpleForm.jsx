
import { useState, useEffect } from "react";

import Message from "./Message"

const SimpleForm = () => {

    const [formState, setformState] = useState({
        name:"",
        email : "",

    });

    const {name, email} = formState;

    const handleInputChange = ({target}) =>{
        console.log(target.value);
        console.log(target.value);

        setformState({
            ...formState,
            [target.name] : target.value,
        })
    };

    // Esta al tanto de si cambia o no el componente
    // useEffect(() => {
    //     console.log("NAME");
    // }, [name]);

    // // Puedes agregar todas las varaibles que quieras al arreglo

    // // //Eejcuta el use state cuando el estado cambie 
    // // useEffect(() => {
    // //     console.log("FROM state");
    // // }, [formState]);

    // useEffect(() => {
    //     console.log("EMAIL");
    // }, [email]);

    return (
        <>
            <h1>SIMPLE FORM</h1>

            <div className="container">
                <div className="form-group">

                <input type="text" name="name" className="form-control" autoComplete="off" value={name} onChange={handleInputChange}/>
                <input type="email" name="email" className="form-control" autoComplete="off" value={email} onChange={handleInputChange}/>

                </div>
            </div>

            {name === "123" && <Message name={name}/>}
            
        </>
    );
};

export default SimpleForm;