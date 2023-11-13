
import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';


function App() {
  const [value, setvalue]= useState(0)
  const handleonchange =(e)=>{
    setvalue(e.target.value)
    console.log(e.target.value)
  } 
  const dispatch=  useDispatch()
  const updatestate=()=>{
    
      dispatch({
        type:"updatestate",
        payload:value
      })
  } 
  const {c} = useSelector(state=>state.custom)
  return (
    <div className="App">
      <input type="text" value={value} onChange={handleonchange}/>
      <button onClick={updatestate}>updatestate</button>
      <h1>this is khushal{c} 
      </h1>
      <Home />
    </div>
  );
}

export default App;
