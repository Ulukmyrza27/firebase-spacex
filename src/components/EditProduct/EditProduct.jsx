import React, { useContext, useEffect } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";
import { productsContext } from "../contexts/FirebaseContext";
// import { productsContext } from "../contexts/ShopContext";

const EditProduct = () => {
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const params = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);
  console.log(oneProduct);
  function save(values) {
    updateProduct(params.id, values);
    navigate("/admin");
  }
  return (
    <div className="edit-container">
      <div className="edit-container-inner">
        <h2 className="edit-product-name">Edit product</h2>
        <Form
          className="edit-form"
          layout="vertical"
          name="basic"
          form={form}
          onFinish={save}
        >
          <Form.Item
            className="edit-product-names"
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please input model",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Image Black"
            name="imageBlack"
            rules={[
              {
                required: true,
                message: "Please input URL of main image(black)!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image White"
            name="imageWhite"
            rules={[
              {
                required: true,
                message: "Please input URL of white images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image Blue"
            name="imageBlue"
            rules={[
              {
                required: true,
                message: "Please input URL of blue images!",
              },
            ]}
          >
            <Input placeholder="Only purple images" />
          </Form.Item>
          <Form.Item
            label="Image Red"
            name="imageRed"
            rules={[
              {
                required: true,
                message: "Please input URL of red images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditProduct;
