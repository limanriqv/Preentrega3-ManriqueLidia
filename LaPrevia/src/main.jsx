import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import {ChakraProvider} from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh1DBXg8xO8KVkgEiF3xnBBXBTBg3rqgU",
  authDomain: "laprevia-bar.firebaseapp.com",
  projectId: "laprevia-bar",
  storageBucket: "laprevia-bar.appspot.com",
  messagingSenderId: "493423279127",
  appId: "1:493423279127:web:31e1271e079642f8393052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
