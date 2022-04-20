import { Alert } from "antd";
import React from "react";
import { useState } from "react";
import fire from "../../fire";

const PasswordReset = () => {
  const [value, setValue] = useState("");
  const [alertEmail, setAlertEmail] = useState(false);
  const [fillEmail, setFillEmail] = useState(false);
  let auth = fire.auth();
  var actionCodeSettings = {
    url: "http://localhost:3000/auth",
    handleCodeInApp: true,
  };
  const forgotPassword = (email) => {
    return auth.sendPasswordResetEmail(email, actionCodeSettings);
  };
  const forgotPasswordHandler = () => {
    const email = value;
    console.log(email);
    if (email)
      forgotPassword(email).then(function () {
        setValue("");
        setAlertEmail((prev) => !prev);
      });
  };
  function resetPassword() {
    forgotPasswordHandler();
    if (value === "") {
      setFillEmail((prev) => !prev);
    }
  }
  return (
    <>
      {alertEmail ? (
        <Alert
          message="Success Tips"
          description="Email has been sent"
          type="success"
          showIcon
        />
      ) : null}
      {fillEmail ? (
        <Alert
          message="Warning"
          description="Please input your email!"
          type="warning"
          showIcon
          closable
        />
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "80%",
          margin: "70px auto",
          alignItems: "center",
          color: "white",
          backgroundColor: "black",
          padding: "50px 20px",
        }}
      >
        <div className="left" style={{ width: "50%" }}>
          <img
            src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2019/06/handWristPain-939030682-770x553-650x428.jpg"
            alt="SpaceX"
            width="100%"
          />
        </div>

        <div className="rigth" style={{ width: "50%" }}>
          <h1 style={{ color: "white" }}>FORGOT PASSWORD?</h1>
          <p
            style={{
              width: "50%",
              margin: "0 auto",
              fontSize: "20px",
              textAlign: "justify",
            }}
          >
            Please enter your email below and we will send you your information
            to recover your password!
          </p>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              width: "50%",
              padding: "10px 5px",
              marginTop: "20px",
              color: "black",
            }}
            type="email"
            placeholder="✉️ Email Address"
          />
          <br />
          <button
            onClick={resetPassword}
            style={{
              width: "20%",
              backgroundColor: "white",
              marginTop: "20px",
              color: "black",
              outline: "none",
              border: "none",
              padding: "10px 0",
            }}
          >
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
