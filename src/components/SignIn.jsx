import React, { useState } from "react";
import firebase, { firestore } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function SignIn(props) {
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
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const emailSignUp = (event) => {
    event.preventDefault();
    const provider = new firebase.auth.EmailAuthProvider();
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <form className="sign-form">
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
        <div className="buttons-div">
          <button type="submit" onClick={emailSignIn} className="sign-button">
            Se connecter
          </button>
          <span>Ou</span>
          <button type="submit" onClick={emailSignUp} className="sign-button">
            Créer un compte
          </button>
        </div>
      </form>
    </div>
  );
}
