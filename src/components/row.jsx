import React, { useState }  from 'react'
import data from "../data"
const cart = [];

function Row(props){
    
    const [availability, setAvailability] = useState(props.availability)
    function Book(id){
        if (availability === 0){
            alert("Sorry, You are late. This batch is full")

        }
        else if(cart.length===3) {
            alert("Sorry, You can add only three")
            
        }
        else{
            for (let i=0;data.length;i++){
                if (id === data[i].id){
                    data[i].Booked += 1;
                    data[i].Availability -=1;
                    setAvailability(data[i].Availability)
                    
                }
            }
           
        }
    }
    return (
        
            <tr>

                <td>{props.subject}</td>
                <td>{props.date}</td>
                <td>{props.time}</td>
                <td>{availability}</td>
                <td><button type="submit" className="btn" onClick={() => Book(props.id)}>{props.buttonText}</button></td>
            </tr>
        
    )
}
export default Row;