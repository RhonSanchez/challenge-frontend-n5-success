import PropTypes from "prop-types";
import { Btn } from "../Btn";
import { ShoppingCartProduct } from "./ShoppingCartProduct";

export const ShoppingCart = ({
  products,
  updateProduct,
  clearCart,
  buyProducts,
}) => {
  const amountProducts = products?.length ? products.length : 0;
  const totalPrice = products.reduce(
    (acc, item) => acc + item.price * item.amountToBuy,
    0
  );

  return (
    <dialog className="shopping-cart" id="modal">
      <span className="shopping-cart-title">Carrito de compras</span>
      <span className="shopping-cart-title-amount">{` (${amountProducts})`}</span>
      {products?.length === 0 ? (
        <h4 className="shopping-cart-title-void">Agrega productos</h4>
      ) : (
        <>
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
          <Btn className="button-block" onClick={clearCart} title="Limpiar" />
          <Btn
            className="button-primary button-block"
            onClick={buyProducts}
            title="Comprar"
          />
        </>
      )}
    </dialog>
  );
};

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amountToBuy: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateProduct: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  buyProducts: PropTypes.func.isRequired,
};
