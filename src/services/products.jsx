export const getValidationProducts = async () => {
  const val = window.localStorage.getItem("products");
  if (val) {
    return JSON.parse(val);
  }
  const resp = await fetch("../../db.json", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await resp.json();
  return data;
};

export const getProducts = async () => {
  const data = await getValidationProducts();
  return data.products;
};

export const getProductsActive = async () => {
  const data = await getValidationProducts();
  return data.products.filter((p) => p.amount > 0);
};

export const postProducts = async (product) => {
  const data = await getValidationProducts();
  data.products.push(product);
  window.localStorage.setItem("products", JSON.stringify(data));
};

export const putProducts = async (product) => {
  const data = await getValidationProducts();
  const indexElement = data.products.findIndex((p) => p.id === product.id);
  data.products.splice(indexElement, 1, product);
  window.localStorage.setItem("products", JSON.stringify(data));
};

export const deleteProducts = async (id) => {
  const data = await getValidationProducts();
  const productsUpdated = data.products.filter((p) => id !== p.id);
  const newProducts = { products: productsUpdated };
  window.localStorage.setItem("products", JSON.stringify(newProducts));
};
