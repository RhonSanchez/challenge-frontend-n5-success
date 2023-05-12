import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="header-nav">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
