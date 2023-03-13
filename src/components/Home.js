import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

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
            <div style={boxStyle}>    
                <h3>box - skapa ett nytt projekt</h3>
                <div>
                    <Link to="/newProject">
                        <Button>Go to page</Button>
                    </Link>
                </div>
            </div>

            <div style={boxStyle}>
                <h3>box - se aktiva projekt</h3>
                <div>
                    <Link to="/activeProjects">
                        <Button>Go to page</Button>
                    </Link>
                </div>
            </div>

            <div style={boxStyle}>
                <h3>box - se tidigare projekt</h3>
                <div>
                    <Link to="/inactiveProjects">
                        <Button>Go to page</Button>
                    </Link>
                </div>
            </div>

            <div style={boxStyle}>
                <h3>box - visa alla tidigare och aktuella projekt gjort av alla</h3>
                <div>
                     <Link to="/projectsList">
                        <Button>Go to page</Button>
                    </Link>
                </div>
            </div>

            <div style={boxStyle}>
                <h3>box - Rapportera in tid på ett projekt en viss dag så jag kan visa vilken tid jag lagt ner</h3>
                <div>
                    <Link to="/reportTime">
                        <Button>Go to page</Button>
                    </Link>
                </div>
            </div>
            <div style={boxStyle}>
                <h3>Lägg till medarbetare</h3>
                <div>
                    <Link to="/addEmployee">
                        <Button>Go to page</Button>
                    </Link>
                </div>
            </div>
        </div>        
    )
}
