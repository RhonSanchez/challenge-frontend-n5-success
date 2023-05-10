import { useState } from "react";

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
  };

  const handleCancel = () => {
    setFormValues(initialValues);
    onClose();
  };

  return (
    <>
      <div className={isOpen ? "modal-overlay" : ""} onClick={onClose} />
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
            <button
              className="modal-dialog-button modal-dialog-button-cancel"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="modal-dialog-button modal-dialog-button-confirm"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};
