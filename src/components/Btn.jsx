import PropTypes from "prop-types";

export const Btn = ({ title, className, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

Btn.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
