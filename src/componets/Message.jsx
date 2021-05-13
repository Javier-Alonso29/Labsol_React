import { useState, useEffect } from "react";

const Message = ({name}) => {

    const [coords, setcoords] = useState({
        x: 0, 
        y: 0,
    });

    console.log(name, 'Message');

    useEffect(() => {
        console.log("Componente montado");

        const mouseMuve = (e) => {
            
            const coords = {x:e.x, y:e.y};
            console.log(coords);
            setcoords(coords);
        };

        window.addEventListener('mousemove', mouseMuve );

        return () =>{
            console.log("component unmoun");
            window.removeEventListener('mousemove', mouseMuve);
        }
        
    }, []);

    const {x,y} = coords;


    return (
        <div>
            <h3>Message</h3>
            <p>x:{x}, y: {y}</p>
        </div>
    );
};


export default Message