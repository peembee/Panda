import React from "react";
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import { TimeLog } from "./TimeLog";

export const HomeComponent = () => {
    const boxStyle = {
        padding: '10px',
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px'
    };

    return(
        <div>           
            <h1>Homepage, information om vad en användare kan göra? såsom </h1>
            <div><TimeLog/></div>
            <div style={boxStyle}>    
                <h3>box - skapa ett nytt projekt</h3>
                <div>
                    <Button>Go to page</Button>
                </div>
            </div>

            <div style={boxStyle}>
                <h3>box - se aktiva projekt</h3>
                <div>
                    <Button>Go to page</Button>
                </div>
            </div>

            <div style={boxStyle}>
                <h3>box - se tidigare projekt</h3>
                <div>
                    <Button>Go to page</Button>
                </div>
            </div>

            <div style={boxStyle}>
                <h3>box - visa alla tidigare och aktuella projekt gjort av alla</h3>
                <div>
                    <Button>Go to page</Button>
                </div>
            </div>

            <div style={boxStyle}>
                <h3>box - Rapportera in tid på ett projekt en viss dag så jag kan visa vilken tid jag lagt ner</h3>
                <div>
                    <Button>Go to page</Button>
                </div>
            </div>

            <div style={boxStyle}>
                <h3>box - Som användare vill jag kunna lägga en kommentar på alla mina tidsrapporter så jag minns vad jag jobbat med</h3>
                <div>                
                    <Button>Go to page</Button>                
                </div>
            </div>
        </div>        
    )
}
