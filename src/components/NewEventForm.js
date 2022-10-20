import { useState } from "react";
import "./NewEventForm.css"

export default function NewEventForm() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

   const resetForm= ()=>{
    setTitle("")
    setDate("")
   }

   const handleSubmit =(e)=>{
    //when a form is submited, it refresh the page,e.preventdef->dont refresh the page
    e.preventDefault()

    const event ={
        title: title,
        date: date,
        //genereate a number between 1 and 1000
        id: Math.floor(Math.random()*1000)
    }
    console.log(event);
    resetForm()
   }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
            <span>Event Title:</span>
            <input type="text"  onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />
        </label>
        <label htmlFor="">
            <span>Event Date:</span>
            <input type="date" onChange={(e)=>setDate(e.target.value)}
            value={date}
            />
        </label>
        <button>Submit</button>
    </form>
  )
}
