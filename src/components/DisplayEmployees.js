import React from 'react'
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Css/loading.css"
import "../Css/displayEmployees.css"

export function DisplayEmployees() {
         const [error, setError] = useState(null);
        const [loaded, setLoaded] = useState(false);
        const [swaggerData, setSwaggerData] = useState([]);
     
        useEffect(() =>{
           fetch("https://axb22z45ygh20230227215753.azurewebsites.net/get-all-employees")
           .then(res => res.json())
           .then((result)=>{  
                setLoaded(true);                       
                   setSwaggerData(result);
                   console.log(result);
               },
               (error)=>{
                setLoaded(true);
                 setError(error);
               }
           )
       },[]);
    
    if(error){
        return <div>Error: {error.message}</div>
        
    }
    else if(!loaded){  // loading data icon
        return (
            <>
            <h2 class="loadingTitle">Loading</h2>
                <div className="spinner-border text-danger loadingIcon" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> 
            </>
        )       
    }
    else{       
        return(
            <div>
                {
                swaggerData.map(swaggerData =>( 
                    <li key={swaggerData.employeeId} class="container">  
                        <div>

                            <p>{"ID nummer: " + swaggerData.employeeId}</p>
                            <p>{"Lösenord: " + swaggerData.password}</p>
                            <p>{"Förnamn: " + swaggerData.firstMidName}</p>
                            <p>{"Efternamn: " + swaggerData.lastName}</p>
                            <p>{"Address: " + swaggerData.address}</p>
                            <p>{"Stad: " + swaggerData.city}</p>
                            <p>{"PostNummer: " + swaggerData.postalCode}</p>
                            <p>{"--------------------------------------"}</p>
                            <br></br>
                            <br></br>
                            
                        </div>
                    </li>
                ))}
            </div>
        );
    }
}
