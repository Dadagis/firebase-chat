import React, { useState } from "react";
// import "./App.css";

import firebase, { firestore } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

firebase.initializeApp({
  apiKey: "AIzaSyC7b22llokG_iTeCr9ciAHxJLwcqyKTNmU",
  authDomain: "fir-chat-7e40b.firebaseapp.com",
  databaseURL: "https://fir-chat-7e40b.firebaseio.com",
  projectId: "fir-chat-7e40b",
  storageBucket: "fir-chat-7e40b.appspot.com",
  messagingSenderId: "400367366185",
  appId: "1:400367366185:web:e77fcabadaefbb8aaa2c38",
});

const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });
  return (
    <div className="App">
      <header className="App-header">
        <SignOut user={user} />
      </header>
      <SignIn />
      {/* <section>{user ? <ChatRoom /> : <SignIn />}</section> */}
    </div>
  );
}

export default App;
