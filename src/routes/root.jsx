import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";
import { ShoppingCartIcon } from "../components/ShoppingCartIcon";
import { Badge } from "../components/Badge";
import { ShoppingCart } from "../components/ShoppingCart";
import { NavBar } from "../components/NavBar";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../context/ShoppintCartContext";

export const Root = () => {
  const { shoppingCartProducts, updateProductsToShoppingCart } =
    useContext(ShoppingCartContext);
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

  useEffect(() => {
    console.log(shoppingCartProducts);
  }, [shoppingCartProducts]);

  const amountBadge = shoppingCartProducts?.length
    ? shoppingCartProducts.length
    : 0;

  const updateProduct = (product) => {
    updateProductsToShoppingCart(product);
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
            />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
