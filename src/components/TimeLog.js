import { Button } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";

export function TimeLog() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function timeInterval() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

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

  return (
    <div style={boxStyle}>
      <h1>{time}</h1>
      <p>{getSeconds()}</p>
      <p>{getMinutes()}</p>
      <p>{getHours()}</p>
      <Button onClick={() => timeInterval()}>start WOrk</Button>
      <Button onClick={() => clearInterval(id.current)}>Lunch Break</Button>
      <Button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
        }}
      >
        End Work
      </Button>
    </div>
  );
}

