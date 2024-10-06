
import firebase from 'firebase/compat/app';  
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
        apiKey: "AIzaSyCV38CuZognGdQDZmPZpA3x3YxAIyEyXsg",
        authDomain: "olx-d7510.firebaseapp.com",
        databaseURL: "https://olx-d7510-default-rtdb.firebaseio.com",
        projectId: "olx-d7510",
        storageBucket: "olx-d7510.appspot.com",
        messagingSenderId: "632522064427",
        appId: "1:632522064427:web:8e4d4ebe32ac271195e06e",
        measurementId: "G-D0JBFMNJE5"
      
};




export default firebase.initializeApp(firebaseConfig); 


