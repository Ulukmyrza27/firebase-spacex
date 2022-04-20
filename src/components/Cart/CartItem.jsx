import React, { useContext } from "react";
import { List, InputNumber, Button, message, Popconfirm } from "antd";
import { cartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  // console.log(item);
  const { deleteFromCart, changeProductCount } = useContext(cartContext);
  function confirmDelete(id) {
    deleteFromCart(id);
    message.success("Removed from your cart!");
  }

  function cancelDelete(e) {
    message.error("Canceled");
  }
  return (
    <List.Item
      key={item.id}
      extra={<img width={272} alt="img" src={item.item.imageBlack} />}
    >
      <List.Item.Meta
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ color: "white" }}>{item.item.name}</h3>
            </div>
            <h3 color="white">{"$" + item.item.price}</h3>
          </div>
        }
        description={
          <>
            <div>{item.item.description}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
              }}
            >
              <div>
                <h4 style={{ color: "white" }}>Quantity</h4>
                <Button
                  onClick={() =>
                    changeProductCount(item.count - 1, item.item.id)
                  }
                >
                  -
                </Button>
                <span style={{ padding: "2px" }}> {item.count} </span>
                <Button
                  onClick={() =>
                    changeProductCount(item.count + 1, item.item.id)
                  }
                >
                  +
                </Button>
              </div>

              <div>
                <h4 style={{ color: "blueviolet" }}>SubPrice</h4>
                <h3 style={{ color: "blueviolet" }}>{"$" + item.subPrice}</h3>
              </div>
            </div>
            <Popconfirm
              title="Are you sure to delete this product from cart?"
              onConfirm={() => confirmDelete(item.item.id)}
              onCancel={cancelDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button>Remove from cart</Button>
            </Popconfirm>
            <Link to="/buycard">
              <button
                style={{
                  width: "100px",
                  height: "33px",
                  color: "white",
                  backgroundColor: "orange",
                }}
              >
                {" "}
                BUY
              </button>
            </Link>
          </>
        }
      />
    </List.Item>
  );
};

export default CartItem;
