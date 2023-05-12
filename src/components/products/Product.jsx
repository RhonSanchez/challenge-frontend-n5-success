import PropTypes from "prop-types";
import { Btn } from "../Btn";
import { BoxIcon } from "../icons/BoxIcon";

export const Product = ({ name, price, isAdded, onAddToCart }) => {
  return (
    <article className="product-container">
      <picture className="product-picture">
        <BoxIcon />
      </picture>
      <div className="product-description">
        <h3 className="product-name">{name}</h3>
        <div className="product-actions">
          <span className="product-price">${price}</span>
          {!isAdded ? (
            <Btn
              className="button-primary"
              onClick={onAddToCart}
              title="Agregar"
            />
          ) : (
            <Btn title="Agregado" />
          )}
        </div>
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAdded: PropTypes.bool.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
