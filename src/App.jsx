import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Index } from "./routes/index.jsx";
import { NewProduct } from "./routes/new-product.jsx";
import { Root } from "./routes/root.jsx";
import { ErrorPage } from "./routes/error-page.jsx";
import { ShoppingCartProvider } from "./context/ShoppintCartContext.jsx";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/new-product",
        element: <NewProduct />,
      },
    ],
  },
]);

const AppState = ({ children }) => {
  return <ShoppingCartProvider>{children}</ShoppingCartProvider>;
};

export default function App() {
  return (
    <AppState>
      <RouterProvider router={router} />
    </AppState>
  );
}
