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

  const deleteProductToShoppingCart = (id) => {
    const oldProducts = shoppingCartProducts.filter((p) => p.id !== id);
    setShoppingCartProducts([...oldProducts]);
  };

  const clearShoppingCart = () => {
    setShoppingCartProducts([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartProducts,
        addProductsToShoppingCart,
        updateProductsToShoppingCart,
        deleteProductToShoppingCart,
        clearShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
