export const Product = ({ name, price, isAdded, onAddToCart }) => {
  return (
    <article className="product-container">
      <picture className="product-picture">
        <img src="src/assets/caja-abierta.svg" width="100%" height="100%" />
      </picture>
      <div className="product-description">
        <h3 className="product-name">{name}</h3>
        <div className="product-actions">
          <span className="product-price">${price}</span>
          {!isAdded ? (
            <button className="product-button" onClick={onAddToCart}>
              Agregar
            </button>
          ) : (
            <button className="product-button product-button-added">
              Agregado
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
