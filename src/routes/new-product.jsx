import { useContext, useState } from "react";
import { DataTable } from "../components/DataTable";
import { ProductModal } from "../components/products/ProductModal";
import { ShoppingCartContext } from "../context/ShoppintCartContext";
import { useProducts } from "../hooks/useProduct";
import { Btn } from "../components/Btn";

export const NewProduct = () => {
  const { products, createProducts, updateProducts, removeProducts } =
    useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const { deleteProductToShoppingCart } = useContext(ShoppingCartContext);

  const handleAddProductClick = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProductClick = (product) => {
    setSelectedProduct(product);
    setIsEdit(true);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleProductSubmit = (product) => {
    if (isEdit) {
      updateProducts({
        ...product,
        price: Number(product.price),
        amount: Number(product.amount),
      });
      deleteProductToShoppingCart(product.id);
      setIsEdit(false);
    } else {
      const newId = products[products.length - 1].id;
      const newProduct = { ...product, id: newId + 1 };
      createProducts({
        ...newProduct,
        price: Number(newProduct.price),
        amount: Number(newProduct.amount),
      });
    }
    setIsModalOpen(false);
  };

  const handleDelete = (row) => {
    removeProducts(row.id);
    deleteProductToShoppingCart(row.id);
  };

  return (
    <div>
      <div className="product-list-container">
        <h1>Lista de productos</h1>
        <Btn
          className="button-primary"
          onClick={handleAddProductClick}
          title="Agregar producto"
        />
      </div>
      <DataTable
        data={products}
        onEdit={handleEditProductClick}
        onDelete={handleDelete}
      />
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleProductSubmit}
        title={selectedProduct ? "Editar producto" : "Agregar producto"}
        initialValues={selectedProduct || { name: "", price: 0, amount: 0 }}
      />
    </div>
  );
};
