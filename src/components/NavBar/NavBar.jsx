import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import SideBar from "../SideBar/SideBar";
import "../NavBar/NavBar.css";
import { Badge, Ribbon } from "antd";
import { cartContext } from "../contexts/cartContext";
import { authContext } from "../contexts/authContext";
import { followContext } from "../contexts/followContext";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { ADMIN_EMAIL } from "../helpers/consts";
// import SideBar from "../SideBar/SideBar";
const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getCart, cartLength } = useContext(cartContext);
  const { countFollow } = useContext(followContext);
  const { currentUser } = useContext(authContext);
  useEffect(() => {
    getCart();
  }, []);
  const NAV_ITEMS = [
    {
      title: "Falcon Heavy",
      link: "/heavy",
      id: 1,
    },
    {
      title: "Human Spaceflight",
      link: "/human",
      id: 2,
    },
    {
      title: "Shop",
      link: "/shop",
      id: 3,
    },
    {
      title: "Falcon 9",
      link: "/",
      id: 4,
    },
    {
      title: "Dragon",
      link: "/",
      id: 5,
    },
    {
      title: "Starship",
      link: "/",
      id: 6,
    },
    {
      title: "Rideshare",
      link: "/",
      id: 7,
    },
  ];
  return (
    <div className="navbar container">
      <Link to="/">
        <div className="navbar-logo-part">
          <img
            className="spacex-logo"
            src="https://download.logo.wine/logo/SpaceX/SpaceX-White-Logo.wine.png"
            alt="img"
          ></img>
        </div>
      </Link>
      <div className="navbar-models" style={{ textDecoration: "none" }}>
        <li className="model">
          <a href=""></a>Falcon - 9
        </li>

        <Link to="falcon">
          <li className="model">
            <a href=""></a>Falcon HEAVY{" "}
          </li>
        </Link>

        <li className="model">
          <a href=""></a>Dragon
        </li>

        <li className="model">
          <a href=""></a>Starship
        </li>

        <Link to="/human">
          <li className="model">
            <a href=""></a>Human Spaceflight
          </li>
        </Link>
        <li className="model">
          <a href=""></a>Rideshare
        </li>
        <li className="model">
          <Link to="/cart">
            <Badge
              size="small"
              className="model"
              style={{ marginLeft: "5px", color: "orange" }}
              count={+cartLength}
            >
              <a style={{ cursor: "pointer", color: "white" }}>
                <ShoppingCartOutlined
                  style={{
                    fontSize: "15px",
                    marginLeft: "10px",
                    top: "0px",
                  }}
                />{" "}
              </a>
            </Badge>
          </Link>
        </li>
        <li className="model">
          <Link to="/favorites">
            <Badge
              size="small"
              className="model"
              style={{ marginLeft: "5px", color: "orange" }}
              count={+countFollow}
            >
              <HeartOutlined
                className="model"
                style={{
                  size: "large",
                  fontSize: "13px",
                  cursor: "pointer",
                  marginLeft: "10px",
                  top: "0px",
                }}
              />
            </Badge>
          </Link>
        </li>
        <li className="model">
          <Link to="/products">
            <li className="model">
              <a href=""></a>Shop
            </li>
          </Link>
        </li>
        <li className="model">
          {currentUser ? (
            <Link
              className={
                location.pathname === "/chat" ? "model-active" : "model"
              }
              to="/chat"
            >
              CHAT
            </Link>
          ) : null}
        </li>
        <li className="model">
          {currentUser === ADMIN_EMAIL ? (
            <Link
              className={
                location.pathname === "/admin" ? "model-active" : "model"
              }
              to="/admin"
            >
              ADMIN
            </Link>
          ) : null}
        </li>
      </div>
      <div className="navbar-right">
        <div className="login-nav">
          <Login />
        </div>
        <div className="sidebar-nav">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// import React, { useContext, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Login from "../Login/Login";
// import SideBar from "../SideBar/SideBar";
// import "../NavBar/NavBar.css";
// import { Badge, Ribbon } from "antd";
// import { cartContext } from "../contexts/cartContext";
// import { authContext } from "../contexts/authContext";
// import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
// import { ADMIN_EMAIL } from "../helpers/consts";
// import { useState } from "react";
// import { followContext } from "../contexts/followContext";
// // import SideBar from "../SideBar/SideBar";
// const NavBar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { getCart, cartLength } = useContext(cartContext);
//   const { countFollow } = useContext(followContext);
//   const { currentUser } = useContext(authContext);
//   useEffect(() => {
//     getCart();
//   }, []);

//   const NAV_ITEMS = [
//     {
//       title: "Falcon Heavy",
//       link: "/heavy",
//       id: 1,
//     },
//     {
//       title: "Human Spaceflight",
//       link: "/human",
//       id: 2,
//     },
//     {
//       title: "Shop",
//       link: "/shop",
//       id: 3,
//     },
//     {
//       title: "Falcon 9",
//       link: "/",
//       id: 4,
//     },
//     {
//       title: "Dragon",
//       link: "/",
//       id: 5,
//     },
//     {
//       title: "Starship",
//       link: "/",
//       id: 6,
//     },
//     {
//       title: "Rideshare",
//       link: "/",
//       id: 7,
//     },
//   ];
//   // console.log(countFollow);
//   return (
//     <div className="navbar container">
//       <Link to="/">
//         <div className="navbar-logo-part">
//           <img
//             className="spacex-logo"
//             src="https://download.logo.wine/logo/SpaceX/SpaceX-White-Logo.wine.png"
//             alt="img"
//           ></img>
//         </div>
//       </Link>
//       <div className="navbar-models" style={{ textDecoration: "none" }}>
//         <li className="model">
//           <a href=""></a>Falcon - 9
//         </li>

//         <Link to="falcon">
//           <li className="model">
//             <a href=""></a>Falcon HEAVY{" "}
//           </li>
//         </Link>

//         <li className="model">
//           <a href=""></a>Dragon
//         </li>

//         <li className="model">
//           <a href=""></a>Starship
//         </li>

//         <Link to="/human">
//           <li className="model">
//             <a href=""></a>Human Spaceflight
//           </li>
//         </Link>
//         <li className="model">
//           <a href=""></a>Rideshare
//         </li>
//         <li className="model">
//           <Link to="/cart">
//             <Badge
//               size="small"
//               className="model"
//               style={{ marginLeft: "5px", color: "orange" }}
//               count={+cartLength}
//             >
//               <a style={{ cursor: "pointer", color: "white" }}>
//                 <ShoppingCartOutlined
//                   style={{
//                     fontSize: "15px",
//                     marginLeft: "10px",
//                     top: "0px",
//                   }}
//                 />{" "}
//               </a>
//             </Badge>
//           </Link>
//         </li>
//         <li className="model">
//           <Link to="/favorites">
//             <Badge
//               size="small"
//               className="model"
//               style={{ marginLeft: "5px", color: "orange" }}
//               count={+countFollow}
//             >
//               <HeartOutlined
//                 className="model"
//                 style={{
//                   size: "large",
//                   fontSize: "13px",
//                   cursor: "pointer",
//                   marginLeft: "10px",
//                   top: "0px",
//                 }}
//               />
//             </Badge>
//           </Link>
//         </li>
//         <li className="model">
//           <Link to="/products">
//             <li className="model">
//               <a href=""></a>Shop
//             </li>
//           </Link>
//         </li>
//         <li className="model">
//           {currentUser ? (
//             <Link
//               className={
//                 location.pathname === "/chat" ? "model-active" : "model"
//               }
//               to="/chat"
//             >
//               CHAT
//             </Link>
//           ) : null}
//         </li>
//         <li className="model">
//           {currentUser === ADMIN_EMAIL ? (
//             <Link
//               className={
//                 location.pathname === "/admin" ? "model-active" : "model"
//               }
//               to="/admin"
//             >
//               ADMIN
//             </Link>
//           ) : null}
//         </li>
//       </div>
//       <div className="navbar-right">
//         <div className="login-nav">
//           <Login />
//         </div>
//         <div className="sidebar-nav">
//           <SideBar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
