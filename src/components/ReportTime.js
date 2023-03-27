import React from 'react';
import { TimeLog } from "./TimeLog";
import { AddComment } from "./AddComment";


export function ReportTime() {
  const {render, timeStart, timeEnd} = TimeLog();

  return (
    <div>
        <h1>comment Component</h1>        
        <div>
                <AddComment />
          ------------------------------------
        </div>
        <div>              
          ------------------------------------
          <h2>TimeLog-component</h2>
                {render}
          ------------------------------------
        </div>
    </div>
  )
}
