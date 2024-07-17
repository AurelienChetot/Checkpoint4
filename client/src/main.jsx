import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// Import des pages

import Home from "./pages/Home";
import ListeProduits from "./pages/ListeProduits";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Profil from "./pages/Profil";

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
