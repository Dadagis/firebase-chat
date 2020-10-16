import { auth } from "firebase";
import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function ChatMessage(props) {
  const { text, uid, photoURL, email } = props.message;
  const messageClassName =
    uid === firebase.auth().currentUser.uid ? "sent" : "received";
  const { user } = props;

  return (
    <div className={`${messageClassName} message`}>
      {photoURL ? (
        <img src={photoURL} />
      ) : (
        <span className="username">{email}</span>
      )}
      <p>{text}</p>
    </div>
  );
}
