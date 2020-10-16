import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

export default function ChatRoom(props) {
  const firestore = firebase.firestore();

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messageValue, setMessageValue] = useState("");
  const [messages] = useCollectionData(query, { idField: "id" });
  const { user } = props;
  const scrollFunc = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, email } = firebase.auth().currentUser;

    await messagesRef.add({
      text: messageValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      email,
    });

    setMessageValue("");

    scrollFunc.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="messages-area">
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} user={user} />
          ))}
        <div ref={scrollFunc}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
