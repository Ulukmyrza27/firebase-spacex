import React, { useReducer, useState, useEffect } from "react";
import axios from "axios";
import { db } from "../../fire";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  getDoc,
  where,
  serverTimestamp,
} from "firebase/firestore";

export const productsContext = React.createContext();
const userCollectionRef = collection(db, "products");
const INIT_STATE = {
  products: [],
  oneProduct: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      console.log(userCollectionRef, action);
      return {
        ...state,
        products: action.payload,
      };
    case "GET_ONE_PRODUCT":
      console.log(action, userCollectionRef);
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
};

const FireContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getProducts() {
    const unsub = onSnapshot(userCollectionRef, (querySnapshot) => {
      let itemsArray = [];
      querySnapshot.forEach((doc) => {
        itemsArray.push({ ...doc.data(), id: doc.id });
      });
      dispatch({
        type: "GET_PRODUCTS",
        payload: itemsArray,
      });
    });
  }

  async function addProducts(newProduct) {
    await addDoc(userCollectionRef, newProduct, { createdAt: serverTimestamp });
    getProducts();
    console.log(userCollectionRef);
  }
  async function deleteProduct(id) {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
  }

  async function getOneProduct(id) {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: docSnap.data(),
    });
  }

  async function updateProduct(id, editedProduct) {
    const userDoc = doc(db, "products", id);
    await updateDoc(userDoc, editedProduct);
    getProducts();
  }
  async function updateComments(id, comments) {
    const userDoc = doc(db, "products", id);
    await updateDoc(userDoc, { comments: comments });
    getOneProduct(id);
  }

  async function updateLikes(id, likes) {
    const userDoc = doc(db, "products", id);
    await updateDoc(userDoc, { likes: likes });
    getOneProduct(id);
  }
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        types: state.types,
        oneProduct: state.oneProduct,
        productsCount: state.productsCount,
        addProducts,
        getProducts,
        deleteProduct,
        getOneProduct,
        updateProduct,
        updateComments,
        updateLikes,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default FireContextProvider;
