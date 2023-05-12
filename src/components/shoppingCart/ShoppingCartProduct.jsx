import PropTypes from "prop-types";

import { MinusIcon } from "../icons/MinusIcon";
import { PlusIcon } from "../icons/PlusIcon";

export const ShoppingCartProduct = ({
  product = { name: "", price: 0, amountToBuy: 0, amount: 0, id: 0 },
  updateProduct,
}) => {
  const pricePerAmount = Number(product.price) * Number(product.amountToBuy);

  const addProducts = () => {
    if (product.amountToBuy < product.amount) {
      updateProduct({ ...product, amountToBuy: product.amountToBuy + 1 });
    }
  };

  const lessProducts = () => {
    if (product.amountToBuy > 0) {
      updateProduct({ ...product, amountToBuy: product.amountToBuy - 1 });
    }
  };

  return (
    <li className="shopping-cart-element">
      <div>
        <span className="shopping-cart-name">{product.name}</span>
        <div className="shopping-cart-controls">
          <div className="shopping-cart-minus" onClick={lessProducts}>
            <MinusIcon />
          </div>
          <span className="shopping-cart-amount">{product.amountToBuy}</span>
          <div className="shopping-cart-plus" onClick={addProducts}>
            <PlusIcon />
          </div>
        </div>
      </div>
      <span className="shopping-cart-price">${pricePerAmount}</span>
    </li>
  );
};

ShoppingCartProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amountToBuy: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  updateProduct: PropTypes.func.isRequired,
};
