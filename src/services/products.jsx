import { API_URL } from "../config/config";

export const getProducts = async () => {
  const resp = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

export const getProductsActive = async () => {
  const resp = await fetch(`${API_URL}?amount_gte=1`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

export const postProducts = async (product) => {
  const resp = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return await resp.json();
};

export const putProducts = async (product) => {
  const resp = await fetch(`${API_URL}/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return await resp.json();
};

export const deleteProducts = async (id) => {
  const resp = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};
