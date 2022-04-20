import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./Details.css";
// import { productsContext } from "../contexts/ShopContext";
import { ADMIN_EMAIL, authContext } from "../contexts/authContext";
import { LikeOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, List, Modal } from "antd";
import { productsContext } from "../contexts/FirebaseContext";
const Details = () => {
  const { getOneProduct, oneProduct, updateComments, updateLikes, products } =
    useContext(productsContext);
  console.log(oneProduct);
  const { currentUser } = useContext(authContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createComment, setCreateComment] = useState({
    comment: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const [activeColor, setActiveColor] = useState("black");
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function save(newComment) {
    let comment = {
      ...newComment,
      name: currentUser,
      id: Date.now(),
    };
    if (!createComment) {
      alert("Fill in");
      return;
    }
    let comments = [...oneProduct.comments, comment];
    console.log(oneProduct.comments);
    updateComments(params.id, comments);
    setIsModalVisible(false);
    setCreateComment("");
  }
  function saveLikes(newLike) {
    let like = {
      user: currentUser,
      id: Date.now(),
    };
    let userLikes = oneProduct.likes.some((item) => item.user === currentUser);
    if (userLikes) {
      let filteredLikes = oneProduct.likes.filter((item) => {
        return item.user !== currentUser;
      });
      updateLikes(params.id, filteredLikes);
    } else {
      let likes = [...oneProduct.likes, like];
      updateLikes(params.id, likes);
    }
  }
  function deleteComment(id) {
    let newComments = oneProduct.comments.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    updateComments(params.id, newComments);
  }

  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  return oneProduct ? (
    <div className="details-container">
      <div className="details-container-inner">
        <div className="details-image">
          <img
            width="90%"
            src={
              activeColor === "black"
                ? oneProduct.imageBlack
                : activeColor === "white"
                ? oneProduct.imageWhite
                : activeColor === "red"
                ? oneProduct.imageRed
                : activeColor === "blue"
                ? oneProduct.imageBlue
                : null
            }
            alt="Main image"
          />
        </div>
        <div className="details-context">
          <h1>{"Model: " + oneProduct.model}</h1>
          <h2>{"Price " + oneProduct.price + "$"}</h2>
          <h4 className="details-description">{oneProduct.description}</h4>
          <p style={{ fontSize: "20px" }}>Choose your color</p>
          <div className="details-colors">
            <button
              onClick={() => setActiveColor("black")}
              style={{
                backgroundColor: "black",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                margin: "10px 15px",
                border: "none",
              }}
            ></button>
            <button
              onClick={() => setActiveColor("white")}
              style={{
                backgroundColor: "white",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                margin: "10px 15px",
              }}
            ></button>
            <button
              onClick={() => setActiveColor("blue")}
              style={{
                backgroundColor: "blue",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                color: "white",
                border: "none",
                margin: "10px 15px",
              }}
            ></button>
            <button
              onClick={() => setActiveColor("red")}
              style={{
                backgroundColor: "red",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                color: "white",
                border: "none",
                margin: "10px 15px",
              }}
            ></button>
          </div>
          <div className="likes-div">
            {currentUser ? (
              <>
                <LikeOutlined
                  onClick={() => saveLikes()}
                  style={{ fontSize: "40px" }}
                />
                <span>{oneProduct.likes.length}</span>{" "}
              </>
            ) : (
              <Link to="/auth">
                <LikeOutlined
                  onClick={() => saveLikes()}
                  style={{ fontSize: "40px", textAlign: "left" }}
                />
              </Link>
            )}
          </div>
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "none",
              padding: "10px 60px",
              marginTop: "20px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={() => navigate("/admin")}
          >
            BUY NOW
          </button>
          <div>
            <p
              style={{
                marginTop: "20px",
                fontSize: "20px",
                marginBottom: "0px",
              }}
            >
              Choose your size
            </p>
            <div className="size-buttons-div">
              <div className="size-buttons">S</div>
              <div className="size-buttons">M</div>
              <div className="size-buttons">L</div>
              <div className="size-buttons">XL</div>
              <div className="size-buttons">XXL</div>
            </div>
          </div>
          {currentUser ? (
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
                padding: "10px 45px",
                marginTop: "20px",
                cursor: "pointer",
              }}
              onClick={() => setIsModalVisible(true)}
            >
              Add a comment
            </button>
          ) : (
            <button
              disabled
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                padding: "8px 13px",
                marginTop: "20px",
                cursor: "pointer",
              }}
              onClick={() => setIsModalVisible(true)}
            >
              Log in to leave a comment
            </button>
          )}
          <div>
            <h2 style={{ marginTop: "10px" }}>Read and write comments</h2>
            <List
              className="details-comments"
              itemLayout="horizontal"
              dataSource={oneProduct.comments}
              renderItem={(item) => (
                <List.Item
                  className="details-comments-inner"
                  style={{ marginLeft: "5px" }}
                >
                  <List.Item.Meta
                    className="details-context-inner"
                    avatar={
                      <Avatar
                        src="https://joeschmoe.io/api/v1/random"
                        className="details-avatar"
                      />
                    }
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={item.comment}
                  />
                  {currentUser === ADMIN_EMAIL ? (
                    <button
                      style={{ marginRight: "20px" }}
                      onClick={() => deleteComment(item.id)}
                    >
                      Delete
                    </button>
                  ) : null}
                </List.Item>
              )}
            />
          </div>
          <>
            <Modal
              footer={null}
              title="Add a comment"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Input
                type="text"
                name="comment"
                value={createComment.comment}
                onChange={(e) =>
                  setCreateComment({
                    ...createComment,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Button
                  onClick={() => save(createComment)}
                  type="primary"
                  htmlType="submit"
                >
                  Save
                </Button>
              </div>
            </Modal>
          </>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
