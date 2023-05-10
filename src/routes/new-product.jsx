import { useState } from "react";
import { DataTable } from "../components/DataTable";
import { ProductModal } from "../components/ProductModal";

export const NewProduct = () => {
  const [data, setData] = useState([
    { id: 1, name: "Product 1", price: 10, amount: 5 },
    { id: 2, name: "Product 2", price: 20, amount: 10 },
    { id: 3, name: "Product 3", price: 30, amount: 15 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddProductClick = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleProductSubmit = (product) => {
    // Aquí puedes hacer algo con los datos del producto
    console.log(product);
    setIsModalOpen(false);
  };

  const handleEdit = (row) => {
    console.log("Edit row:", row);
  };

  const handleDelete = (row) => {
    setData((prevData) => prevData.filter((d) => d.id !== row.id));
  };

  return (
    <div>
      <div className="product-list-container">
        <h1>Product List</h1>
        <button className="product-list-button" onClick={handleAddProductClick}>
          Add Product
        </button>
      </div>
      <DataTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleProductSubmit}
        title={selectedProduct ? "Edit Product" : "Add Product"}
        initialValues={selectedProduct || { name: "", price: "", amount: "" }}
      />
    </div>
  );
};
