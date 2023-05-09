import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode]= useState('light');//Whether dark mode is enabled or not.
  const [alert, setAlert]= useState(null);
  const showAlert = (message, type)=>{  //Here alert is an object.
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);  
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark mode has been Enabled","success");
      // document.title='TextUtils-Dark mode';
    }  
    else {
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been Enabled","success");
      // document.title='TextUtils-Light mode'
    }
  }    
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <BrowserRouter> */}
      <Routes>
        <Route exact path ="/about" element={<About mode={mode}/>}/>   {/*  /user-->Component 1 , /users/home -->Component 2*/}
        <Route exact path ="/" element={
          <TextForm showAlert={showAlert} heading=" Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
          }/> 
      </Routes>
    {/* </BrowserRouter> */}
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;
