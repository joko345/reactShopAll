// cartContext.js
import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <CartContext.Provider value={{ data, setData }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };