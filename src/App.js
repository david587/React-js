import './App.css';
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from './components/Modal';

function App() {
  const [showModal,setModal] = useState(false)
  const [showEvents, setShowEvents] =useState(true)
  const [events,setEvents] = useState([
    {title:"mario birthday bash", id: 1},
    {title:"mario birthday ", id: 2},
    {title:"mario ", id: 3}
  ]);
  console.log(showModal);

  const handleclick =(id)=>{
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id !== event.id
      })
    })
    console.log(id);
  }

  const handleClose =() =>{
    setModal(false)
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
      
      {showEvents && events.map((event,i)=>  (
        <React.Fragment key={event.id}>
          <h2> {event.title} - {i} </h2>
          <button onClick={()=> handleclick(event.id)}>delete event</button>
        </React.Fragment>
      ))}

      
      <br />
      {/* //modal nested */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia beatae iste, reiciendis ipsa distinctio quis expedita quibusdam sapiente pariatur.</p>
      </Modal>}

      <div>
      <button onClick={()=>setModal(true)}>Show modal</button>
      </div>

    </div>
  );
}

export default App;
