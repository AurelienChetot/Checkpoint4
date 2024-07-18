import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import LOGIN from "../assets/images/login.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const notifyUser = () =>
    toast("Vous êtes connecter vous allez être redirigé", {
      style: {
        border: "solid 2px #000000",
        backgroundColor: "#82313C",
        color: "#ffffff",
      },
    });
  const notifyError = () =>
    toast("Votre compte n'est pas bon !", {
      style: {
        border: "solid 2px #000000",
        backgroundColor: "#82313C",
        color: "#ffffff",
      },
    });

  const handleValidation = async (e) => {
    e.preventDefault();
    try {
      const loginUrl = "http://localhost:3310/api/auth/login";

      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        notifyError();
        throw new Error("Email ou mot de passe incorrect !");
      }

      const userData = await response.json();

      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData.user));
      notifyUser();

      setTimeout(() => {
        navigate(`/Profil/${userData.user.id}`);
      }, 2000);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form className="login-container">
      <img className="login-img" src={LOGIN} alt="Login images" />
      <div className="text-login-container">
        <p className="text-login-style">Se connecter</p>
        <div className="form-group">
          <div className="mail-container">
            <label htmlFor="email">Adresse mail</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="password-container">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          className="login-button"
          type="submit"
          onClick={handleValidation}
        >
          Connexion
        </button>
        <Link className="link-style" to="/Account">
          <p className="no-account-style">Pas de compte ? Enregistrez-vous</p>
        </Link>
        <Toaster />
      </div>
    </form>
  );
}
