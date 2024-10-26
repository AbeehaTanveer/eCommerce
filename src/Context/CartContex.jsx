import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for the cart
export const Cartproducts = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize cart state as an empty array
  const [single, setSingle] = useState(null); // State to store the selected product details
  const navigate = useNavigate();

  const handleSingleProduct = (item) => {
    const cartItem = {
      title: item.title,
      imageUrl: item.imageUrl,
      price: item.price,
      description: item.description,
      quantity: 1,
    };
    setSingle(cartItem);
    navigate("/singleProduct");
  };

  const AddtoCart = (item, quantity = 1) => {
    const existingItem = cart.find((pro) => pro.title == item.title);
    if (existingItem) {
      navigate("/cart");
      console.log("Item already exists in cart.");
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
      navigate("/cart");
    }
  };

  const DeleteToCart = (item) => {
    const DellItems = cart.filter((pro) => pro.title !== item.title); // Filter out the item based on title
    setCart(DellItems); // Update the cart with the filtered array
  };
  




  const autoCart = (item) => {
    AddtoCart(item);
  };


  const AddQuantity = (item) => {
    setCart((prevCart) => 
      prevCart.map((cartItem) => {
        if (cartItem.title === item.title) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      })
    );
  };

  const MinusQuantity = (item) => {
    setCart((prevCart) => 
      prevCart.map((products) => {
        if (products.title === item.title) {
          // Ensure the quantity doesn't go below 1
          const newQuantity = products.quantity > 1 ? products.quantity - 1 : 1;
          return { ...products, quantity: newQuantity };
        } else {
          return products;
        }
      })
    );
  };




  return (
    <Cartproducts.Provider
      value={{
        handleSingleProduct,
        AddtoCart,
        single,
        cart,
        autoCart,
        DeleteToCart,
        AddQuantity,
        MinusQuantity
        
      }}
    >
      {children}
    </Cartproducts.Provider>
  );
};

export default CartContext;
