import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminPage from "../AdminPage/AdminPage";
import Details from "../Details/Details";
import EditProduct from "../EditProduct/EditProduct";
import Error from "../Error/Error";
import Home from "../Home/Home";
import ProductsList from "../ProductsList/ProductsList";
import Footer from "../Footer/Footer";
import Auth from "../Auth/Auth";
import NavBar from "../NavBar/NavBar";
import Login from "../Login/Login";
import Chat2 from "../Chat/Chat2";
import Human from "../Human/Human";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";
import Buy from "../Buy/Buy";
import { authContext } from "../contexts/authContext";
import { ADMIN_EMAIL } from "../helpers/consts";
import PasswordReset from "../PasswordReset/PasswordReset";
import FollowCard from "../FollowCard/FollowCard";
const Routing = () => {
  const { currentUser } = useContext(authContext);
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/details/:id",
      element: <Details />,
      id: 2,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 3,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 4,
    },
    {
      link: "/chat",
      element: <Chat2 />,
      id: 5,
    },
    {
      link: "/human",
      element: <Human />,
      id: 6,
    },
    {
      link: "/falcon",
      element: <Header />,
      id: 7,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 8,
    },
    {
      link: "/buy",
      element: <Buy />,
      id: 9,
    },
    {
      link: "/passwordreset",
      element: <PasswordReset />,
      id: 11,
    },
    {
      link: "/favorites",
      element: <FollowCard />,
      id: 8,
    },
  ];
  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  return (
    <BrowserRouter>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "97vh",
        }}
      >
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {ADMIN_ROUTES.map((item) => (
            <Route
              path={item.link}
              element={
                currentUser === ADMIN_EMAIL ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
