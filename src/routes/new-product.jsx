import { useContext, useEffect, useState } from "react";
import { DataTable } from "../components/DataTable";
import { ProductModal } from "../components/ProductModal";
import { ShoppingCartContext } from "../context/ShoppintCartContext";

export const NewProduct = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const { shoppingCartProducts, deleteProductToShoppingCart } =
    useContext(ShoppingCartContext);

  const getProducts = async () => {
    const resp = await fetch("http://localhost:3000/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    setProducts(data);
  };

  const postProducts = async (product) => {
    const resp = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await resp.json();
    getProducts();
  };

  const putProducts = async (product) => {
    const resp = await fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await resp.json();
    getProducts();
  };

  const deleteProducts = async (id) => {
    const resp = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, [shoppingCartProducts]);

  useEffect(() => {
    if (isModalOpen) {
      setSelectedProduct(selectedProduct);
    }
  }, [isModalOpen]);

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
    // Aquí puedes hacer algo con los datos del producto
    if (isEdit) {
      putProducts(product);
      deleteProductToShoppingCart(product.id);
      setIsEdit(false);
    } else {
      const newId = products[products.length - 1].id;
      const newProduct = { ...product, id: newId + 1 };
      postProducts(newProduct);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (row) => {
    deleteProducts(row.id);
    deleteProductToShoppingCart(row.id);
  };

  return (
    <div>
      <div className="product-list-container">
        <h1>Product List</h1>
        <button className="product-list-button" onClick={handleAddProductClick}>
          Add Product
        </button>
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
        title={selectedProduct ? "Edit Product" : "Add Product"}
        initialValues={selectedProduct || { name: "", price: "", amount: "" }}
      />
    </div>
  );
};
