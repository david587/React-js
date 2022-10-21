import { useState } from "react";
import "./NewEventForm.css"

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation]= useState("manchester");

   const resetForm= ()=>{
       setTitle("")
       setDate("")
       setLocation("manchester")
   }

    const handleSubmit =(e)=>{
        e.preventDefault()

    const event ={
        title: title,
        date: date,
        location: location,
        //genereate a number between 1 and 1000
        id: Math.floor(Math.random()*1000)
    }
    
    console.log(event);

    addEvent(event)
    resetForm()
   }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
            <span>Event Title:</span>
            <input type="text" 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />
        </label>
        <label htmlFor="">
            <span>Event Date:</span>
            <input
            type="date" 
            onChange={(e)=>setDate(e.target.value)}
            value={date}           
            />
        </label>
        <label>
            <span>Event location:</span>
            {/* //whatever they pickked, it vill be the e.target->location */}
            <select onChange={(e)=>setLocation(e.target.value)}>
                <option value="manchester">Manchester</option>
                <option value="london">London</option>
                <option value="cardiff">Cardiff</option>
            </select>
        </label>
        <button>Submit</button>
    </form>
  )
}
