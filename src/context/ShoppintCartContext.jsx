import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);

  const addProductsToShoppingCart = (product) => {
    setShoppingCartProducts([
      ...shoppingCartProducts,
      {
        ...product,
        amountToBuy: 1,
      },
    ]);
  };

  const updateProductsToShoppingCart = (product) => {
    const oldProducts = shoppingCartProducts;
    const indexElement = oldProducts.findIndex((p) => p.id === product.id);
    oldProducts[indexElement].amountToBuy = product.amountToBuy;
    setShoppingCartProducts([...oldProducts]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartProducts,
        addProductsToShoppingCart,
        updateProductsToShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
