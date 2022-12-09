import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sepeteEkle } from "../actions/actions";

const Products = (props) => {
  console.log(">>PRODUCTS BOOKLIST", props.bookList);
  console.log(">>PRODUCTS CART", props.cart);

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}

      <div className="book">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg"
          alt="Simyaci"
        />
        <div>
          <h4>Simyaci</h4>
          <p>Yazar: Paulo Coelho</p>
          <p>Fiyat: &#8378; 19.99</p>
          <button>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  };
};
export default connect(mapStateToProps, { sepeteEkle })(Products);
