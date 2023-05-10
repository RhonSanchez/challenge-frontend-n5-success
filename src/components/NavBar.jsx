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
            Home
          </NavLink>
        </li>
        <li>|</li>
        <li>
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
  );
};
