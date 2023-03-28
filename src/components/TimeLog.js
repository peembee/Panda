import { Button } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import '../Css/reportTime.css'


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
    return `${time % 60}`;
  }

  function getMinutes() {
    const minutes = Math.floor(time / 60);
    return `${minutes % 60}:`;
  }

  function getHours() {
    const hours = Math.floor(time / 3600);
    return `${hours}:`;
  }

  console.log(timeStart)
  console.log(timeEnd)
  return {
    //Exporting time when clock started and time when clock stopped and render component
    timeStart, timeEnd,
    render:(
    <div >
      <h1>{time}</h1>
      <h4>{getHours()}{getMinutes()}{getSeconds()} </h4>

    
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

