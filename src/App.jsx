// import React, { useEffect } from react;
//import './App.css';
// import axios from 'axios';

import { useState } from "react";
import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, Datasnapshot } from "firebase/database";
//import { setSelectionRange } from '@testing-library/user-event/dist/utils';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgjuzPjpudgjC838eV4IKp1dC9T0Uj82A",
  authDomain: "zombie-attack-10468.firebaseapp.com",
  databaseURL: "https://zombie-attack-10468-default-rtdb.firebaseio.com",
  projectId: "zombie-attack-10468",
  storageBucket: "zombie-attack-10468.appspot.com",
  messagingSenderId: "383082495887",
  appId: "1:383082495887:web:ffb4b29cf98bbfc12295fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const dbRef = ref(getDatabase());


export const App = () => {
  get(child(dbRef, `ranking`)).then ((snapshot) => {
    setScore(snapshot.val());
  });

  const [score, setScore] = useState({});

  return (
    <div className='container'> 
    <h1>Zombie Attack</h1>
      {Object.keys(score).map((player) => {
        return (
          <div className='form'>
            <table>
              <tr>
            <th>Jogador: {player}</th>
            <th>Pontuação: {score[player]}</th>
            </tr>
            </table>
          </div>
        )
      })}
      <a href='https://remarkable-gelato-c5cfe4.netlify.app'><button>NÃO CLIQUE AQUI</button></a>
    </div>
);
};

  


