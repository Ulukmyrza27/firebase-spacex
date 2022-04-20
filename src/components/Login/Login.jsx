import { Button } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";
import { ADMIN_EMAIL } from "../helpers/consts";
import { LoginOutlined } from "@ant-design/icons";
const Login = () => {
  const { currentUser, handleLogOut } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div>
          {currentUser ? (
            <>
              {ADMIN_EMAIL === currentUser ? (
                <img
                  className="navbar-avatara"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulRG15PwPnuxMAIMjVwPrkKEMLeSUSsJUew&usqp=CAU"
                  alt="pic"
                  style={{
                    width: "40px",
                    height: "25px",
                    marginRight: "15px",
                    marginBottom: "7px",
                  }}
                />
              ) : (
                <img
                  className="navbar-avatara"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7kjpF8xZ5eZgQgAA1NjhsiYW_fNidDLa4g&usqp=CAU"
                  alt="pic"
                  style={{
                    width: "35px",
                    marginRight: "5px",
                    marginBottom: "13px",
                  }}
                />
              )}{" "}
              <LoginOutlined
                style={{
                  fontSize: "17px",
                  marginRight: "75px",
                  color: "White",
                }}
                onClick={handleLogOut}
              />
            </>
          ) : (
            <Button
              className="navbar-avatara"
              onClick={() => navigate("/auth")}
              style={{
                width: "110px",
                height: "22px",
                fontSize: "9px",
                marginRight: "75px",
                color: "white",
                backgroundColor: "black",
                borderColor: "darkgrey",
                marginBottom: "5px",
              }}
            >
              Log in / Sign up 🚀
            </Button>
          )}
        </div>
      </nav>

      {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {currentUser ? (
          <span style={{ marginRight: "8px" }}>
            {currentUser}
            <Button style={{ marginLeft: "5px" }} onClick={handleLogOut}>
              Logout
            </Button>
          </span>
        ) : (
          <Button
            style={{ marginRight: "8px" }}
            onClick={() => navigate("/auth")}
          >
            Log in/ Sign up
          </Button>
        )}
      </div> */}
    </div>
  );
};

export default Login;
