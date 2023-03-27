import { Button } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";


export function TimeLog() {
  const [time, setTime] = useState(0);
  const [timeStart, setTimeStart] = useState(Date);
  const [timeEnd, setTimeEnd] = useState(Date);


//Allt med timern att göra.
  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function timeInterval() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }
// får start datum och slutdatum när man clickar på start och stopp
  function handleDateStart(){
    //börjar klockan
    timeInterval();
    setTimeStart(new Date());
  }
  function handleDateEnd(){
    setTimeEnd(new Date());
  }

//Calculations for seconds, minutes and hours
  function getSeconds() {
    return `Sekunder: ${time % 60}`;
  }

  function getMinutes() {
    const minutes = Math.floor(time / 60);
    return `Minuter: ${minutes % 60}`;
  }

  function getHours() {
    const hours = Math.floor(time / 3600);
    return `Timmar: ${hours}`;
  }

  const boxStyle = {
    padding: "10px",
    marginBottom: "20px",
    marginTop: "20px",
    marginLeft: "20px",
  };

  console.log(timeStart)
  console.log(timeEnd)
  return {
    //other variables here
    timeStart, timeEnd,
    render:(
    <div style={boxStyle}>
      <h1>{time}</h1>
      <p>{getSeconds()}</p>
      <p>{getMinutes()}</p>
      <p>{getHours()}</p>
    
      <Button onClick={() => handleDateStart()}>start Work</Button>

      <Button onClick={() => clearInterval(id.current)}>Lunch Break</Button>
      <Button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
          handleDateEnd();
        }}
      >
        End Work
      </Button>
    </div>
  )}
}

