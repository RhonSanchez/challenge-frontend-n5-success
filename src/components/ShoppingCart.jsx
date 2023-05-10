import { ShoppingCartProduct } from "./ShoppingCartProduct";

export const ShoppingCart = ({ products, updateProduct }) => {
  const amountProducts = products?.length ? products.length : 0;
  const totalPrice = products.reduce(
    (acc, item) => acc + item.price * item.amountToBuy,
    0
  );

  return (
    <dialog className="shopping-cart" id="mi-menu">
      <span className="shopping-cart-title">Carrito de compras</span>
      <span className="shopping-cart-title-amount">{` (${amountProducts})`}</span>
      <ul className="shopping-cart-list">
        {products &&
          products.map((product) => (
            <ShoppingCartProduct
              key={product.id}
              product={product}
              updateProduct={updateProduct}
            />
          ))}
      </ul>
      <div className="shopping-cart-checkout">
        <span className="shopping-cart-total">Total</span>
        <span className="shopping-cart-price">${totalPrice}</span>
      </div>
      <button className="shopping-cart-clean">Limpiar</button>
      <button className="shopping-cart-buy">Comprar</button>
    </dialog>
  );
};
