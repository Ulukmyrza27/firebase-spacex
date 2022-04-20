import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import { authContext } from "../contexts/authContext";
import { AutoComplete, Avatar, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const { uid, currentUser } = useContext(authContext);

  const [user] = useAuthState(auth);
  console.log(user);
  console.log(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  console.log(messages);

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: uid,
      displayName: currentUser,
      //   photoURL:
      //     "https://www.clipartkey.com/mpngs/m/107-1076987_user-staff-man-profile-person-icon-circle-png.png",
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          height: "60vh",
          border: "1px solid gray",
          overflowY: "auto",
          margin: "0 auto",
        }}
      >
        {messages.map((message) => (
          <div
            style={{
              margin: 10,
              border:
                user.uid === message.uid ? "2px solid green" : "2px dashed red",
              marginLeft: user.uid === message.uid ? "auto" : "10px",
              width: "fit-content",
              padding: 5,
            }}
          >
            <div>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <div>{message.displayName}</div>
            </div>
            <div>{message.text}</div>
          </div>
        ))}
      </div>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <TextArea
          placeholder="Type your message here!"
          rows={4}
          variant={"outlined"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          style={{ marginTop: "20px", marginBottom: "10px" }}
          type="primary"
          onClick={sendMessage}
          variant={"outlined"}
        >
          Отправить
        </Button>
      </div>
    </>
  );
};

export default Chat;
