import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./components/Routing/Routing";
import "./App.css";
import AuthContextProvider from "./components/contexts/authContext";
import FireContextProvider from "./components/contexts/FirebaseContext";
import CartContextProvider from "./components/contexts/cartContext";
import FollowContextProvider from "./components/contexts/followContext";
const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <FollowContextProvider>
          <AuthContextProvider>
            <FireContextProvider>
              <Routing />
            </FireContextProvider>
          </AuthContextProvider>
        </FollowContextProvider>
      </CartContextProvider>
    </div>
  );
};

export default App;
