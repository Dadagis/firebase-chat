import React from "react";
import firebase, { firestore } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatRoom() {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(10);
  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <div>
      {messages &&
        messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
    </div>
  );
}
