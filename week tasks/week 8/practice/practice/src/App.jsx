import React, { useReducer, useState } from 'react'

const initialstate = {count : 0}

 function reducer (state, action) {
  switch (action.type){
    case 'increment' :
      return {count : state.count +1 }
    case 'decrement':
      return {count : state.count  -1 }
    case 'reset' :
      return {count : 0}  
    default :
        return state

  }

 }

function App() {
  const [state, dispatch] = useReducer(reducer, initialstate)
  
  const handlReset = () =>{
       dispatch({type: 'reset'})
  }
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={()=> dispatch(({type : 'increment'}))}>increment</button>
      <button onClick={()=> dispatch(({type : 'decrement'}))}>decrement</button>
      <button onClick={handlReset}>reset</button>
    </div>
  )
}

export default App