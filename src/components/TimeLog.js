import { Button } from "react-bootstrap";

import React, { useState, useEffect, useRef } from "react";
import '../Css/reportTime.css'


export function TimeLog() {
  const [time, setTime] = useState(0);
  const [timeStart, setTimeStart] = useState(Date);
  const [timeEnd, setTimeEnd] = useState(Date);
  const [startWorkActive, setStartWorkActive] = useState(true);
  const [lunchBreakActive, setLunchBreakActive] = useState(true);
  const [endWorkActive, setEndWorkActive] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const handleClick= () =>{
    if (!hasStarted){
      setTimeStart(new Date());
      setHasStarted(true)
    }
  }


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

    setStartWorkActive(false);
    setLunchBreakActive(true);
  }
  function handleDateEnd(){
    setTimeEnd(new Date());
    setHasStarted(false)
    setStartWorkActive(true);
    setLunchBreakActive(false);
    setEndWorkActive(true);
  }

  function handleLunchBreak() {
    clearInterval(id.current);
    setLunchBreakActive(false);
    setStartWorkActive(true);
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

  console.log('the start time is ' + timeStart)
  console.log('the end time is ' + timeEnd)
  return {
    //Exporting time when clock started and time when clock stopped and render component
    timeStart, timeEnd,
    render:(
    <div >
      <h1>{time}</h1>
      <h4>{getHours()}{getMinutes()}{getSeconds()} </h4>

    
      <Button onClick={() => {handleDateStart(); handleClick();}} disabled={!startWorkActive}>start Work</Button>

      <Button onClick={() => handleLunchBreak()} disabled={!lunchBreakActive}>Lunch Break</Button>
      <Button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
          handleDateEnd();
          handleClick();
        }}
        disabled={!endWorkActive}
      >
        End Work
      </Button>
    </div>
  )}
}

