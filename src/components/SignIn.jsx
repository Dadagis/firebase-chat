import React, { useState } from "react";
import firebase, { firestore } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    if (input.id === "email") {
      setEmail(input.value);
    } else {
      setPassword(input.value);
    }
  };

  const emailSignIn = (event) => {
    event.preventDefault();
    const provider = new firebase.auth.EmailAuthProvider();
    // firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          value={email}
        />
        <input
          type="password"
          placeholder="********"
          id="password"
          onChange={handleChange}
          value={password}
        />
        <button type="submit" onClick={emailSignIn}>
          Bonsoir
        </button>
      </form>
    </div>
  );
}
