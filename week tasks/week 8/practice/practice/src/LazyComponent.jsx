import React from 'react'

const LazyComponent = () => {
  return (
    <div>Hello , LazyComponent </div>
  )
}

export default LazyComponent










//lazy loading 

// import React, { Suspense } from 'react';

// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// const ParentComponent = () => {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// };

// export default ParentComponent;














// useReduce

// import React,{ useReducer } from "react"

// const intialstate = {count : 0}

// function reducer(state, action){
//   switch(action.type){
//     case 'increment':
//       return {count : state.count+1}
//     case 'decrement':
//       return {count : state.count-1}
//     default:
//       return state
//   }
  
// }

// const Counter = () =>{
//   const [state , dispatch] = useReducer(reducer, intialstate)


//   return(
//     <div>
//       {state.count}
//       <button onClick={()=> dispatch({type : 'increment'})}>increment</button>
//       <button onClick={()=> dispatch({type : "decrement"})}>decrement</button>
//     </div>
//   )
// }

// <button>increment</button>


// export default Counter



// useContext

// import React,{  useContext } from "react";

// const mycontext = React.createContext()

// const Child = () =>{
//   const value = useContext(mycontext)
//   return <div>value:{value}</div>  
// }

// const parentComponent  = () =>{

//   return (

//     <mycontext.Provider value='hello how are you'>
//     <Child/>
//   </mycontext.Provider>
//   )
// }

// export default parentComponent








//useMemo

// import React,{ useState, useMemo } from "react";

// const parentComponent = () =>{
//   const [count , setCount] = useState(0)
//   const [ number , setNumber] = useState(10)

//   const computation = useMemo (() =>{
// console.log('calculate');
// return number *2

//   },[number])
  
//   return(
//     <div>
//     <p>{count}</p>
//     <p>{computation}</p>
//     <button onClick={()=> setCount(count +1)}>count</button>
//     <button onClick={()=> setNumber(number +1)}>click</button>
//   </div>
// )
// }

// export default parentComponent



// useCallback

// import React, { useState, useCallback } from 'react';

// const ChildComponent = React.memo(({ handleClick }) => {
//   console.log('Child re-rendered');
//   return <button onClick={handleClick}>Click Me</button>;
// });

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//   }, []); 

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <ChildComponent handleClick={handleClick} />
//     </div>
//   );
// };

// export default ParentComponent;


// change button color

// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [change, setChange] = useState(false)
//   const handle = () =>{
//     setChange(!change)
//   }
//   return (
//     <>
//       <div>

//     <button onClick={handle} style={change ? {background:'red'} : {background:'green'}} >click</button>
//      <button onClick={handle} style={change ? {background:'green'} : {background:'red'}}>click</button>
//       <p>
//      {/* {count} */}

//      </p>



//       </div>
      
//     </>
//   )
// }

// export default App
