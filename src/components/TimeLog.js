import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

export function TimeLog(){
  
    const [time, setTime] = useState(0);
    
    useEffect(() =>{
         return()=> clearInterval(id.current)
    },[])

    let id = useRef();
    

    function timeInterval(){
       id.current = setInterval(() => {
            setTime((prev) => prev + 1);
         }, 1000);
    }
    

    const boxStyle = {
        padding: '10px',
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
    };


    return (
        <div style={boxStyle}>
        <h1>{time}</h1>
        <Button onClick={() => timeInterval()}>start WOrk</Button>
        <Button onClick={() => clearInterval(id.current)}>Lunch Break</Button>
        <Button onClick={() => {
            clearInterval(id.current); 
            setTime(0)} }>End Work</Button>
        </div>
    )
}
