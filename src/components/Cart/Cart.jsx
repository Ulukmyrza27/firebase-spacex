import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { cartContext } from "../contexts/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={
          <h2 style={{ color: "black", marginLeft: "5%" }}>
            Total: {cart?.totalPrice}$
          </h2>
        }
        renderItem={(item) => <CartItem item={item} />}
      />
    </div>
  );
};

export default Cart;
