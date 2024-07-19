import ReactDOM from "react-dom/client";
import axios from "axios";
// import { jwtDecode } from "jwt-decode";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// Import des pages

import Home from "./pages/Home";
import ListeProduits from "./pages/ListeProduits";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Profil from "./pages/Profil";
import Error404 from "./pages/Error404";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const [imagesResponse, produitsResponse] = await Promise.all([
            axios.get(`http://localhost:3310/api/imagesaccueil`),
            axios.get(`http://localhost:3310/api/produits`),
          ]);
          return {
            images: imagesResponse.data,
            produits: produitsResponse.data,
          };
        },
      },
      {
        path: "/listeproduits/:id",
        element: <ListeProduits />,
        loader: async () => {
          try {
            const token = localStorage.getItem("token");
            if (!token) {
              // eslint-disable-next-line no-throw-literal
              throw {
                message:
                  "Vous devez etre connecter pour acceder à cette page ❌",
              };
            }
            return null;
          } catch (error) {
            console.error(error);
            throw error;
          }
        },
      },
      {
        path: "/profil/:id",
        element: <Profil />,
        loader: async ({ params }) => {
          const token = localStorage.getItem("token");
          try {
            const response = await axios.get(
              `${import.meta.env.VITE_API_URL}/api/utilisateurs/${params.id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            return response.data;
          } catch (error) {
            console.error(error);
            throw error;
          }
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
