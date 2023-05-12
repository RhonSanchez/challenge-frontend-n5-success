import { useEffect, useState } from "react";
import {
  getProducts,
  postProducts,
  putProducts,
  deleteProducts,
  getProductsActive,
} from "../services/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsActive, setProductsActive] = useState([]);

  const getAllProducts = async () => {
    const resp = await getProducts();
    setProducts(resp);
  };

  const getProductsToBuy = async () => {
    const resp = await getProductsActive();
    setProductsActive(resp);
  };

  const createProducts = async (product) => {
    await postProducts(product);
    await getAllProducts();
    await getProductsToBuy();
  };

  const updateProducts = async (product) => {
    await putProducts(product);
    await getAllProducts();
    await getProductsToBuy();
  };

  const removeProducts = async (id) => {
    await deleteProducts(id);
    await getAllProducts();
    await getProductsToBuy();
  };

  useEffect(() => {
    getAllProducts();
    getProductsToBuy();
  }, []);

  return {
    products,
    productsActive,
    getAllProducts,
    getProductsToBuy,
    createProducts,
    updateProducts,
    removeProducts,
  };
};
