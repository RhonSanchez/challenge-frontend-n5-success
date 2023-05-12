import { useContext } from "react";
import { Product } from "../components/products/Product";
import { ShoppingCartContext } from "../context/ShoppintCartContext";
import { useProducts } from "../hooks/useProduct";

export const Index = () => {
  const { productsActive } = useProducts();
  const { shoppingCartProducts, addProductsToShoppingCart } =
    useContext(ShoppingCartContext);

  const onAddToCart = (product) => {
    addProductsToShoppingCart(product);
  };

  const isAddedProduct = (id) => {
    return !!shoppingCartProducts?.find((p) => p.id === id);
  };

  return (
    <div>
      <main>
        <div className="products-container">
          {productsActive &&
            productsActive.map((product) => (
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
