import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {FirebaseContext} from './Store/Context'
import Context from './Store/Context'
import firebase from './firebase/config' 

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <FirebaseContext.Provider value={{firebase}}>
    <Context>
    
    <App />

    </Context>

    </FirebaseContext.Provider>
   </StrictMode>
)



// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import { FirebaseContext } from './Store/firebaseContext';
// // import { firebase } from 'firebase';  // Import Firebase
// import {firebase} from './firebase/config'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <FirebaseContext.Provider value={{ firebase }}>  {/* Pass Firebase via context */}
//       <App />
//     </FirebaseContext.Provider>
//   </StrictMode>
// );
