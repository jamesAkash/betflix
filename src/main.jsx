import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./ui/ErrorPage.jsx";

const Pages = () => {
  return (
    <div>
      Pages
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pages",
        element: <Pages />,
        children: [
          {
            path: ":id",
            element: <h1>Page</h1>,
          },
        ],
      },
      {
        path: "settings",
        element: <h1>Settings</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
