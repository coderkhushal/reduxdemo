import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()
    const {c} = useSelector(state=>{return state.custom})
    const addbtn=()=>{
        dispatch({
            type:"increment"
        })
    }
    const subbtn=()=>{
        dispatch({
            type:"decrement"
        })
    }
    const incrementbyvalue=()=>{
        dispatch({
            type:"incrementbyvalue",
            payload:20
        })
    }
  return (
    <div>
      this is home 
      <h2>{c}</h2>
      <button onClick={subbtn}>decrement</button>
      <button onClick={incrementbyvalue}>increment by value</button>
      <button onClick={addbtn}>increment</button>
    </div>
  )
}

export default Home
