import './App.css';
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal,setModal] = useState(false)
  const [showEvents, setShowEvents] =useState(true)
  const [events,setEvents] = useState([]);
  //átadjuk a beirt adatokat->event
  const addEvent=(event)=>{
    setEvents((prevEvents)=>{
      // console.log("prev:",prevEvents,"  ","event:",event);
      console.log([...prevEvents, event]);
      return [...prevEvents, event]
    })
    //hogy bezárodjon
    setModal(false);
  }

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

      {/* //eventList nested*/}
      {showEvents  && <EventList events={events} handleclick={handleclick}/>}
      
      <br />
      {/* //modal nested */}
      {showModal && <Modal  isSalesModal={true}>
        {/* //we pass addevent as a prop */}
        <NewEventForm addEvent ={addEvent}/>
      </Modal>}

      <div>
      <button onClick={()=>setModal(true)}>Add new Event</button>
      </div>

    </div>
  );
}

export default App;
