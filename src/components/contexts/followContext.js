import React, { useReducer } from "react";
import { CASE_GET_FAN } from "../helpers/Cases";

export const followContext = React.createContext();

const INIT_STATE = {
  follow: {},
  countFollow: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_FAN:
      console.log(action.payload.follws.length);
      return {
        ...state,
        follow: action.payload,
        countFollow: action.payload.follws.length,
      };
    default:
      return state;
  }
};
const FollowContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getCart1() {
    let block = JSON.parse(localStorage.getItem("block"));
    if (!block) {
      block = { follws: [] };
      localStorage.setItem("block", JSON.stringify(block));
    }

    dispatch({
      type: CASE_GET_FAN,
      payload: block,
    });
  }

  function addFollow(product) {
    let block = JSON.parse(localStorage.getItem("block"));
    if (!block) {
      block = { follws: [] };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInCart = block.follws.some(
      (item) => item.item.id == newProduct.item.id
    );
    if (isProductInCart) {
      block.follws = block.follws.filter(
        (item) => item.item.id != newProduct.item.id
      );
    } else {
      block.follws.push(newProduct);
    }
    localStorage.setItem("block", JSON.stringify(block));
  }

  function checkFollow(id) {
    let block = JSON.parse(localStorage.getItem("block"));
    if (!block) {
      block = { follws: [] };
    }
    let isProductInFan = block.follws.some((item) => item.item.id == id);
    return isProductInFan;
  }

  function deleteFollow(id) {
    let block = JSON.parse(localStorage.getItem("block"));
    if (!block) {
      block = { follws: [] };
    }
    block.follws = block.follws.filter((item) => item.item.id != id);
    localStorage.setItem("block", JSON.stringify(block));
    getCart1();
  }

  return (
    <followContext.Provider
      value={{
        follow: state.follow,
        countFollow: state.countFollow,
        getCart1,
        addFollow,
        checkFollow,
        deleteFollow,
      }}
    >
      {children}
    </followContext.Provider>
  );
};
export default FollowContextProvider;
