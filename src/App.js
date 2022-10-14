import './App.css';
import { useState } from "react";

function App() {
  const [name,setName] = useState("mario")

  const handleclick =()=>{
    setName("luigi")
    console.log(name);
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleclick}>Change name</button>
    </div>
  );
}

export default App;
