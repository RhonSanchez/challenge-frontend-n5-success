import { Product } from "../components/Product";

export const Index = () => {
  const onAddToCart = () => {
    console.log("add to cart");
  };

  return (
    <div>
      <main>
        <Product name="Leche" price={375000} onAddToCart={onAddToCart} />
      </main>
    </div>
  );
};
