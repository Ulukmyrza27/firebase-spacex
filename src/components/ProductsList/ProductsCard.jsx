import React, { useContext, useState } from "react";
import { Card } from "antd";
import { cartContext } from "../contexts/cartContext";
import { followContext } from "../contexts/followContext";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;

const ProductsCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addFollow, checkFollow } = useContext(followContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  const [like, setLike] = useState(checkFollow(item.id));

  function clickFollow() {
    addFollow(item);
    setLike(checkFollow(item.id));
  }
  console.log(checkInCart);
  return (
    <Card
      style={{ width: "330px", margin: "70px" }}
      cover={<img width="100px" alt="example" src={item.imageBlack} />}
      actions={[
        <HeartOutlined
          onClick={() => clickFollow()}
          key="icon-heart"
          style={{
            color: like ? "red" : "black",
            fontSize: "25px",
          }}
        />,
        <ShoppingOutlined
          key="icon-cart"
          style={{
            color: checkInCart ? "red" : "black",
            fontSize: "25px",
          }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />,
        <Link key="ellipsis" to={`/details/${item.id}`}>
          <EllipsisOutlined style={{ fontSize: "25px", color: "black" }} />
        </Link>,
      ]}
    >
      <Meta
        title={item.model}
        description={
          <>
            <h2 style={{ textAlign: "center" }}>{"$" + item.price}</h2>
          </>
        }
      />
    </Card>
  );
};

export default ProductsCard;
