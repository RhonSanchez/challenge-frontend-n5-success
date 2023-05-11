import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";
import { ShoppingCartIcon } from "../components/ShoppingCartIcon";
import { Badge } from "../components/Badge";
import { ShoppingCart } from "../components/ShoppingCart";
import { NavBar } from "../components/NavBar";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../context/ShoppintCartContext";

export const Root = () => {
  const {
    shoppingCartProducts,
    updateProductsToShoppingCart,
    clearShoppingCart,
  } = useContext(ShoppingCartContext);
  const onOpenModal = () => {
    document.getElementById("mi-menu").style.display = "block";
  };

  document.addEventListener("click", (evento) => {
    if (
      !evento.target.closest("#mi-menu") &&
      !evento.target.closest("#abrir-menu")
    ) {
      document.getElementById("mi-menu").style.display = "none";
    }
  });

  const updateProducts = async (product) => {
    const resp = await fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await resp.json();
  };

  useEffect(() => {
    console.log(shoppingCartProducts);
  }, [shoppingCartProducts]);

  const amountBadge = shoppingCartProducts?.length
    ? shoppingCartProducts.length
    : 0;

  const updateProduct = (product) => {
    updateProductsToShoppingCart(product);
  };

  const buyProducts = () => {
    console.log(shoppingCartProducts);
    shoppingCartProducts.map(async (product) => {
      const productForUpdate = {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: product.amount - product.amountToBuy,
      };
      await updateProducts(productForUpdate);
    });
    clearShoppingCart();
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Logo />
        </div>
        <NavBar />
        <div className="header-elements">
          <div
            id="abrir-menu"
            className="header-shopping-cart"
            onClick={onOpenModal}
          >
            <ShoppingCartIcon />
            {amountBadge > 0 ? <Badge amount={amountBadge} /> : ""}
            <ShoppingCart
              products={shoppingCartProducts}
              updateProduct={updateProduct}
              clearCart={clearShoppingCart}
              buyProducts={buyProducts}
            />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
