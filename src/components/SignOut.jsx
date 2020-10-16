import React from "react";
import firebase, { firestore } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function SignOut(props) {
  const { user } = props;

  return (
    user && (
      <button onClick={() => firebase.auth().signOut()}>Se déconnecter</button>
    )
  );
}
