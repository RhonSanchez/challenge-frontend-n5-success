import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Btn } from "../Btn";

export const ProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  initialValues,
}) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
    setFormValues(initialValues);
  };

  const handleCancel = () => {
    setFormValues(initialValues);
    onClose();
  };

  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues]);

  return (
    <>
      <div className={isOpen ? "modal-dialog-overlay" : ""} onClick={onClose} />
      <dialog className="modal-dialog" open={isOpen}>
        <form onSubmit={handleSubmit}>
          <h2>{title}</h2>
          <div className="modal-dialog-form">
            <div className="modal-dialog-form-name">
              <label htmlFor="name-input">Name:</label>
              <input
                type="text"
                id="name-input"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="modal-dialog-form-2">
              <div className="modal-dialog-form-price">
                <label htmlFor="price-input">Price:</label>
                <input
                  type="number"
                  id="price-input"
                  name="price"
                  value={formValues.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modal-dialog-form-amount">
                <label htmlFor="amount-input">Amount:</label>
                <input
                  type="number"
                  id="amount-input"
                  name="amount"
                  value={formValues.amount}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <div className="modal-dialog-actions">
            <Btn
              className="button-block"
              onClick={handleCancel}
              title="Cancelar"
            />
            <Btn
              className="button-primary button-block"
              type="submit"
              title="Guardar"
            />
          </div>
        </form>
      </dialog>
    </>
  );
};

ProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
