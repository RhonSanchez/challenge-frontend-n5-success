import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartProducts, setShoppingCartProducts] = useState(() => {
    const val = window.localStorage.getItem("products");
    if (val) {
      return JSON.parse(val);
    }
    return [];
  });

  const addProductsToShoppingCart = (product) => {
    const newProducst = [
      ...shoppingCartProducts,
      {
        ...product,
        amountToBuy: 1,
      },
    ];
    setShoppingCartProducts(newProducst);
    window.localStorage.setItem("products", JSON.stringify(newProducst));
  };

  const updateProductsToShoppingCart = (product) => {
    const oldProducts = shoppingCartProducts;
    const indexElement = oldProducts.findIndex((p) => p.id === product.id);
    oldProducts[indexElement].amountToBuy = product.amountToBuy;
    setShoppingCartProducts([...oldProducts]);
    window.localStorage.setItem("products", JSON.stringify([...oldProducts]));
  };

  const deleteProductToShoppingCart = (id) => {
    const oldProducts = shoppingCartProducts.filter((p) => p.id !== id);
    setShoppingCartProducts([...oldProducts]);
    window.localStorage.setItem("products", JSON.stringify([...oldProducts]));
  };

  const clearShoppingCart = () => {
    setShoppingCartProducts([]);
    window.localStorage.setItem("products", []);
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
