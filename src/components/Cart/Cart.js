import React, { useState, useEffect } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState();
  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += parseInt(item.qty);
      price += item.qty * item.price;
    });
    console.log("InsideSIde", items);
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart]);
  console.log("OutSIde", totalItems);
  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1>Your cart is empty</h1>
        </>
      ) : (
        <div className="container-div">
          <div className="items">
            <div className="header">
              <h3
                style={{
                  paddingTop: "2%",
                  paddingLeft: "2%",
                  marginBottom: "3%",
                }}
              >
                Shopping Cart
              </h3>
            </div>
            <div className="added">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="container-div">
        <div className="details-c">
          <div className="details">
            <h4 style={{ textAlign: "center", paddingTop: "5%" }}>
              Cart Summary
            </h4>
            <div
              style={{
                textAlign: "center",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
              <span>Subtotal ({totalItems} items) : </span>
              <span style={{ fontWeight: "bold" }}>₹ {totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    cart: store.cart,
  };
};

export default connect(mapStateToProps)(Cart);
