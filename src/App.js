import { useState } from "react";
import React from "react";
import './App.css';
import Main from "./Main";


function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className="App" style={{background:(darkTheme==false)? "white":"black"}}>
     <Main darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    </div>
  );
}

export default App;
