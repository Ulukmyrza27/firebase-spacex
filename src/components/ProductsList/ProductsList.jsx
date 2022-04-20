import { Empty, Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import "./ProductsList.css";
import ProductsCard from "./ProductsCard";
import { productsContext } from "../contexts/FirebaseContext";

import { Card } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import JsonData from "../MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const { Meta } = Card;

const ProductsList = () => {
  const { getProducts, products } = useContext(productsContext);

  const [searchValue, setSearchValue] = useState("");
  let productsList = products.filter((item) =>
    item.model.toLowerCase().includes(searchValue.toLowerCase())
  );
  useEffect(() => {
    getProducts();
  }, []);
  const [items, setItems] = useState(JsonData.slice(0, 5));
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;
  const pageCount = Math.ceil(items.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log(products);
  return (
    <div className="container">
      <div className="products-search">
        <Input.Search
          className="products-list-search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="products-list">
        {products.length > 0 ? (
          productsList
            .slice(pagesVisited, pagesVisited + productsPerPage)
            .map((item) => {
              return (
                <ProductsCard item={item} />
                //         <Card
                //           style={{ width: "330px", margin: "70px" }}
                //           cover={
                //             <img width="100px" alt="example" src={product.imageBlack} />
                //           }
                //           actions={[
                //             <HeartOutlined
                //               onClick={() => clickFollow(product.id)}
                //               key="icon-heart"
                //               style={{ fontSize: "25px", color: "black" }}
                //             />,
                //             <ShoppingOutlined
                //               key="icon-cart"
                //               style={{ fontSize: "25px", color: "black" }}
                //             />,
                //             <Link key="ellipsis" to={`/details/${product.id}`}>
                //               <EllipsisOutlined
                //                 style={{ fontSize: "25px", color: "black" }}
                //               />
                //             </Link>,
                //           ]}
                //         >
                //           <Meta
                //             title={product.model}
                //             description={
                //               <>
                //                 <h2 style={{ textAlign: "center" }}>
                //                   {"$" + product.price}
                //                 </h2>
                //               </>
                //             }
                //           />
                //         </Card>
              );
            })
        ) : (
          <Empty />
        )}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default ProductsList;

// import { Empty, Input, Pagination } from "antd";
// import React, { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import "./ProductsList.css";
// import ProductsCard from "./ProductsCard";
// import { productsContext } from "../contexts/FirebaseContext";

// const ProductsList = () => {
//   const { getProducts, products, productsCount } = useContext(productsContext);
//   console.log(getProducts);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [showFilters, setShowFilters] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   // searchParams.get("q") ? searchParams.get("q") : ""
//   const [type, setType] = useState([]);
//   const [price, setPrice] = useState([100, 1000]);
//   const [page, setPage] = useState(
//     searchParams.get("_page") ? searchParams.get("_page") : 1
//   );
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   // filter/sort
//   // const database = firebase.database();

//   // filter/sort
//   const [limit, setLimit] = useState(3);
//   useEffect(() => {
//     getProducts();
//     // console.log(products);
//   }, []);
//   useEffect(() => {
//     // setSearchParams({
//     // q: searchValue,
//     // type: type,
//     // price_gte: price[0],
//     // price_lte: price[1],
//     // _page: page,
//     // _limit: limit,
//     // });
//     console.log(type);
//     if (type.length > 0) {
//       let newProducts = products.filter((item) =>
//         type.some((elem) => elem == item.type)
//       );
//       setFilteredProducts(newProducts);
//     } else {
//       setFilteredProducts(products);
//     }
//   }, [searchValue, type, price, page, limit]);
//   // useEffect(() => {
//   //   getProducts();
//   // }, [searchParams]);
//   useEffect(() => {
//     setFilteredProducts(products);
//   }, [products]);
//   console.log(products);
//   console.log(type);
//   console.log(filteredProducts);
//   return (
//     <div className="container">
//       <div className="products-search">
//         <div
//           style={{ cursor: "pointer", marginLeft: "7px" }}
//           onClick={() => setShowFilters(!showFilters)}
//         >
//           {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
//         </div>
//         <Input.Search
//           className="products-list-search"
//           placeholder="Search..."
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//         />
//       </div>
//       {showFilters ? (
//         <Filters
//           type={type}
//           setType={setType}
//           price={price}
//           setPrice={setPrice}
//         />
//       ) : null}
//       <div className="products-list">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((item) => (
//             <ProductsCard key={item.id} item={item} />
//           ))
//         ) : (
//           <Empty />
//         )}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: "30px",
//           marginBottom: "50px",
//         }}
//       >
//         {/* <Pagination
//           total={+productsCount}
//           current={+page}
//           pageSize={+limit}
//           defaultCurrent={1}
//           onChange={(page, limit) => {
//             setPage(page);
//             setLimit(limit);
//           }}
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default ProductsList;
