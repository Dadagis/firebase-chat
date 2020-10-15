import { auth } from "firebase";
import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClassName =
    uid === firebase.auth().currentUser.uid ? "sent" : "received";

  return (
    <div className={messageClassName}>
      <p>{text}</p>
    </div>
  );
}
