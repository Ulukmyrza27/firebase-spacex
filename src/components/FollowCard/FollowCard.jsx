import React, { useContext, useEffect } from "react";
import { List, Button } from "antd";
import { followContext } from "../contexts/followContext";

const FollowCard = () => {
  const { follow, getCart1, deleteFollow } = useContext(followContext);
  useEffect(() => {
    getCart1();
  }, []);

  console.log(follow);
  return (
    // <div style={{ margin: "50px auto" }}>
    //   <div className="containers">

    <List
      itemLayout="vertical"
      dataSource={follow.follws}
      style={{ marginTop: "10px", marginLeft: "5%" }}
      renderItem={(item) => (
        <List.Item extra={<img width={272} src={item.item.imageBlack} />}>
          <List.Item.Meta
            title={<h2>{item.item.model}</h2>}
            description={
              <>
                <div style={{ display: "flex" }}>
                  <h4>{item.item.description}</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      borderColor: "grey",
                      color: "black",
                    }}
                    danger
                    type="text"
                    onClick={() => deleteFollow(item.item.id)}
                  >
                    Delete
                  </Button>
                  <h4
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {" "}
                    Price:
                    {"$" + item.item.price}
                  </h4>
                </div>
              </>
            }
          />
        </List.Item>
      )}
    />
    //   </div>
    // </div>
  );
};

export default FollowCard;
