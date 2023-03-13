import React from 'react'
import { TimeLog } from "./TimeLog";
import { AddComment } from "./AddComment";

export function ReportTime() {
  return (
    <div>
        <h1>Rapportera in tid på ett projekt en viss dag så jag kan visa vilken tid jag lagt ner</h1>        
        <div>
          ------------------------------------
          <h2>AddComment-component</h2>
                <h3>box - Som användare vill jag kunna lägga en kommentar på alla mina tidsrapporter så jag minns vad jag jobbat med</h3>
                <AddComment />
          ------------------------------------
        </div>

        <div>              
          ------------------------------------
          <h2>TimeLog-component</h2>
                <TimeLog />
          ------------------------------------
        </div>
    </div>
  )
}
