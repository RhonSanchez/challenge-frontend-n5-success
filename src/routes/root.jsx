import { Link, Outlet, NavLink } from "react-router-dom";
import { Logo } from "../components/Logo";
import { MinusIcon } from "../components/MinusIcon";
import { PlusIcon } from "../components/PlusIcon";
import { ShoppingCartIcon } from "../components/ShoppingCartIcon";

export const Root = () => {
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

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Logo />
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              {/* <Link to="/">Home</Link> */}
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>|</li>
            <li>
              {/* <Link to="/new-product">New Product</Link> */}
              <NavLink
                to="/new-product"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                New Product
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-elements">
          <div
            id="abrir-menu"
            className="header-shopping-cart"
            onClick={onOpenModal}
          >
            <ShoppingCartIcon />
            <div className="shopping-cart-badge">
              <span>7</span>
            </div>
            <dialog className="shopping-cart" id="mi-menu">
              <span className="shopping-cart-title">Carrito de compras</span>
              <span className="shopping-cart-title-amount">{` (${4})`}</span>
              <ul className="shopping-cart-list">
                <li className="shopping-cart-element">
                  <div>
                    <span className="shopping-cart-name">Leche</span>
                    <div className="shopping-cart-controls">
                      <div className="shopping-cart-minus">
                        <MinusIcon />
                      </div>
                      <span className="shopping-cart-amount">1</span>
                      <div className="shopping-cart-plus">
                        <PlusIcon />
                      </div>
                    </div>
                  </div>
                  <span className="shopping-cart-price">$130000</span>
                </li>
              </ul>
              <div className="shopping-cart-checkout">
                <span className="shopping-cart-total">Total</span>
                <span className="shopping-cart-price">$130000</span>
              </div>
              <button className="shopping-cart-clean">Limpiar</button>
              <button className="shopping-cart-buy">Comprar</button>
            </dialog>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
