import React from "react";
import styles from "./EventList.module.css"


export default function EventList({events, handleclick}) {
  return(
    <div>
    {events.map((event,i)=>  (
        <div className={styles.card}  key={event.id}>
          <h2> {event.title} - {i} </h2>
          <button onClick={()=> handleclick(event.id)}>delete event</button>
        </div>
      ))
    }
    </div>
  )
  
}