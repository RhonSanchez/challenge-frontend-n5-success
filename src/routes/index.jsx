import { useContext, useEffect, useState } from "react";
import { Product } from "../components/Product";
import { ShoppingCartContext } from "../context/ShoppintCartContext";

export const Index = () => {
  const [products, setProducts] = useState([]);
  const { shoppingCartProducts, addProductsToShoppingCart } =
    useContext(ShoppingCartContext);

  const getProducts = async () => {
    const resp = await fetch("http://localhost:3000/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [shoppingCartProducts]);

  const onAddToCart = (product) => {
    // console.log(product);
    addProductsToShoppingCart(product);
  };

  const isAddedProduct = (id) => {
    return !!shoppingCartProducts?.find((p) => p.id === id);
  };

  return (
    <div>
      <main>
        <div className="products-container">
          {products &&
            products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                isAdded={isAddedProduct(product.id)}
                onAddToCart={() => onAddToCart(product)}
              />
            ))}
        </div>
      </main>
    </div>
  );
};
