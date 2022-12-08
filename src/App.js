import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

const App = (props) => {
  console.log(">> BOOKLIST", props.bookList);
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(App);
