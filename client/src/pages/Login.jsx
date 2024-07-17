import { Link } from "react-router-dom";
import LOGIN from "../assets/images/login.jpg";

export default function Login() {
  return (
    <div className="login-container">
      <img className="login-img" src={LOGIN} alt="Login images" />
      <div className="text-login-container">
        <p className="text-login-style">Se connecter</p>
        <div className="form-group">
          <div className="mail-container">
            <label htmlFor="username">Adresse mail</label>
            <input type="email" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <div className="password-container">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" placeholder="Mot de passe" />
          </div>
        </div>
        <button className="login-button" type="submit">
          Connexion
        </button>
        <Link className="link-style" to="/Account">
          <p className="no-account-style">Pas de compte ? Enrengistrez-vous </p>
        </Link>
      </div>
    </div>
  );
}
