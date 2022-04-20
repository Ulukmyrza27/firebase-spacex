import { Button, List } from "antd";
import React, { useContext, useEffect } from "react";
import VirtualList from "rc-virtual-list";
import { Link } from "react-router-dom";
import "./AdminList.css";
// import { productsContext } from "../contexts/ShopContext";
import { DeleteOutlined } from "@ant-design/icons";
import { productsContext } from "../contexts/FirebaseContext";

const AdminList = () => {
  const { products, getProducts, deleteProduct, getOneProduct } =
    useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <List>
      <VirtualList data={products} itemHeight={47} itemKey="email">
        {(item) => (
          <List.Item key={item.id} className="admin-products-list">
            <img src={item.imageBlack} alt="11" width="20%" />
            <span style={{ width: "50%", margin: "0 auto", fontSize: "20px" }}>
              {item.model}
              <div className="admin-products-description">
                {item.description}
              </div>
            </span>
            <div
              className="admin-products-buttons"
              style={{ fontSize: "20px" }}
            >
              <DeleteOutlined
                style={{ fontSize: "25px", color: "blue" }}
                onClick={() => deleteProduct(item.id)}
              />
              <Link to={`/edit/${item.id}`} style={{ margin: "auto 30px" }}>
                Edit
              </Link>
            </div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default AdminList;
