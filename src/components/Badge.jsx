import PropTypes from "prop-types";

export const Badge = ({ amount }) => {
  return (
    <div className="shopping-cart-badge">
      <span>{amount}</span>
    </div>
  );
};

Badge.propTypes = {
  amount: PropTypes.number.isRequired,
};
