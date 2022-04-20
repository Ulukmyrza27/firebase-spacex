import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCc2riEghnYzk29AUqKFrfaCDMy01cYLqo",
  authDomain: "spacex-auth.firebaseapp.com",
  projectId: "spacex-auth",
  storageBucket: "spacex-auth.appspot.com",
  messagingSenderId: "689780210978",
  appId: "1:689780210978:web:b46b03c790b40a260e797b",
};
const fire = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const db = getFirestore(fire);
export default fire;

// import firebase from "firebase/compat/app";
// import "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import {
//   getFirestore,
//   doc,
//   setDoc,
//   collection,
//   getDocs,
//   query,
//   where,
//   onSnapshot,
//   orderBy,
// } from "firebase/firestore";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAwLEgfEnLMNDsDct8lgOXqohD9H8NuCDk",
//   authDomain: "spacex-efee9.firebaseapp.com",
//   projectId: "spacex-efee9",
//   storageBucket: "spacex-efee9.appspot.com",
//   messagingSenderId: "1010213021536",
//   appId: "1:1010213021536:web:4d8581497e5e15cd0ee005",
// };
// // Initialize Firebase
// const fire = firebase.initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();
// export const auth = firebase.auth();
// // Init services
// export const db = getFirestore(fire);
// // const firestore = getFirestore();

// // collection ref
// const userCollectionRef = collection(db, "products");

// // queries
// const q = query(
//   userCollectionRef,
//   where("price", ">", "1000")
//   // where("type", "==", "male")
//   // orderBy("createdAt"),
// );
// // .onSnapshot((querySnapshot) => {
// //       const items = [];
// //       querySnapshot.forEach((doc) => {
// //         items.push(doc.data());
// //       });

// // real time data collection
// onSnapshot(q, (snapshot) => {
//   let products = [];
//   snapshot.docs.forEach((doc) => {
//     products.push({ ...doc.data(), id: doc.id });
//   });
//   // console.log(products);
// });

// // get collection data
// getDocs(userCollectionRef)
//   .then((snapshot) => {
//     let products = [];
//     snapshot.docs.forEach((doc) => {
//       products.push({ ...doc.data(), id: doc.id });
//     });
//     // console.log(products);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// // const products = doc(firestore, "products");
// // function writeProducts() {
// //   const docData = {
// //     model: "Space Hoodie X",
// //     price: 500,
// //     description:
// //       "This SpaceX hoodie has a classic unisex design and provides comfort with style. It also comes with a small hidden opening for your earphone cord, and hidden earphone loops. This makes it the perfect hoodie to wear when you want to listen to your favorite tracks on your run. Of course, the hoodie is also nice to wear when you’re having a comfy stay-at-home day.",
// //     type: "Male",
// //   };
// //   setDoc(products, docData);
// // }
// // console.log("FireStore, hello there");
// // writeProducts();
// export default fire;
