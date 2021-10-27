import React, { useState, useEffect } from "react";
import Data from "../data";
import Row from "./row"


function App(){
    function Count(){
   const randomNo = Math.floor(Math.random()*30) + 30;
   const [No,setNo] = useState(randomNo);
   useEffect (() => {
       const interval = setInterval(() => {
          setNo(No => No - 1) 
       },1000);
       return () => {
           clearInterval(interval);
       };
   }, []);

   return <h2>Time Left: {No} seconds</h2>
}
    const no = Math.floor(Math.random()*5)+10;

    return <div>

        <div className="header">
            <Count />
            <h1>Claim Your Free Trial Class</h1>
            <h2>Class Schedule</h2>
            <img src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/000000/external-cart-retail-store-inipagistudio-lineal-color-inipagistudio.png" alt="Cart Name"/>
            <h4>Free Seats Left: {no}</h4>
        </div>
            <table style={{width:"80%"}}>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Availability</th>
                    <th>  </th>
                </tr>
            </thead>
            <tbody>
                {Data.map((comp,index) => {
                    return (
                        <Row
                        key={index}
                        id ={index}
                        subject={comp.Subject}
                        date={comp.Date}
                        time={comp.Time}
                        availability={comp.Availability}
                        buttonText={comp.ButtonText}
                        booked={comp.Booked}
                        />
                    )
                }
                    )}; 
                    
        
            </tbody>
            </table>
        
    </div>
}

export default App;