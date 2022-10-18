import React from "react";

export default function EventList({events, handleclick}) {
  return(
    <div>
    {events.map((event,i)=>  (
        <React.Fragment key={event.id}>
          <h2> {event.title} - {i} </h2>
          <button onClick={()=> handleclick(event.id)}>delete event</button>
        </React.Fragment>
      ))
    }
    </div>
  )
  
}