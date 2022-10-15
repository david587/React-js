import './App.css';
import { useState } from "react";
import Title from "./components/Title"

function App() {
  const [showEvents, setShowEvents] =useState(true)
  const [events,setEvents] = useState([
    {title:"mario birthday bash", id: 1},
    {title:"mario birthday ", id: 2},
    {title:"mario ", id: 3}
  ]);
  console.log(showEvents);

  const handleclick =(id)=>{
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id !== event.id
      })
    })
    console.log(id);
  }

  const subtitlestr = "All the latest events in MarioLand"

  return (
    <div className="App">
      <Title Title="Events in your Area" subtitle={subtitlestr}/>
      <Title Title="another title" subtitle="another"/>
      {showEvents && (
      <div>
          <button onClick={()=>setShowEvents(false)}>hide events</button>
      </div>
      )}

      {!showEvents&& (
      <div>
          <button onClick={()=>setShowEvents(true)}>show events</button>
      </div>
      )}
      
      {showEvents && events.map((event,i)=>  (
        <div key={event.id}>
          <h2> {event.title} - {i} </h2>
          <button onClick={()=> handleclick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
