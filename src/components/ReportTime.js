import React from 'react';
import { TimeLog } from "./TimeLog";
import { AddComment } from "./AddComment";


export function ReportTime() {
  const {render, timeStart, timeEnd} = TimeLog();
  const {renderComment, selectedProjectId} = AddComment();

  return (
    <div>
        <h1>comment Component</h1>        
        <div>
                {renderComment}
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
