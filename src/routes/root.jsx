import { Outlet } from "react-router-dom";
import { Logo } from "../components/icons/Logo";
import { ShoppingCartIcon } from "../components/icons/ShoppingCartIcon";
import { Badge } from "../components/Badge";
import { ShoppingCart } from "../components/shoppingCart/ShoppingCart";
import { NavBar } from "../components/NavBar";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppintCartContext";
import { useProducts } from "../hooks/useProduct";

export const Root = () => {
  const {
    shoppingCartProducts,
    updateProductsToShoppingCart,
    clearShoppingCart,
  } = useContext(ShoppingCartContext);
  const { updateProducts } = useProducts();
  const onOpenModal = () => {
    document.getElementById("modal").style.display = "block";
  };

  document.addEventListener("click", (evento) => {
    if (
      !evento.target.closest("#modal") &&
      !evento.target.closest("#open-modal")
    ) {
      document.getElementById("modal").style.display = "none";
    }
  });

  const amountBadge = shoppingCartProducts?.length
    ? shoppingCartProducts.length
    : 0;

  const updateProduct = (product) => {
    updateProductsToShoppingCart(product);
  };

  const buyProducts = () => {
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
            id="open-modal"
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
