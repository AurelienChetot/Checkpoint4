import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Account() {
  const notify = () => toast("Votre compte a bien été créé.");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    adresse: "",
    ville: "",
    code_postal: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3310/api/utilisateurs",
        formData
      );
      setTimeout(() => {
        navigate(`/Login`);
      }, 2000);
      return response;
    } catch (error) {
      return error;
    }
  };
  return (
    <div className="account-container">
      <div className="account-container-form">
        <p className="account-style">S'enregistrer</p>
        <div className="form-container">
          <label htmlFor="username">Votre Prénom</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Votre Prénom"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-container">
          <label htmlFor="lastname">Votre Nom</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Votre Nom"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-container">
          <label htmlFor="email">Votre adresse mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Votre mail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-container">
          <label htmlFor="adresse">Votre adresse</label>
          <input
            type="text"
            name="adresse"
            id="adresse"
            placeholder="Votre adresse"
            value={formData.adresse}
            onChange={handleChange}
          />
        </div>
        <div className="form-container">
          <label htmlFor="ville">Votre ville</label>
          <input
            type="text"
            name="ville"
            id="ville"
            placeholder="Votre ville"
            value={formData.ville}
            onChange={handleChange}
          />
        </div>
        <div className="form-container">
          <label htmlFor="code_postal">Votre code postal</label>
          <input
            type="text"
            name="code_postal"
            id="code_postal"
            placeholder="Votre code postal"
            value={formData.code_postal}
            onChange={handleChange}
          />
        </div>
        <div className="form-container">
          <label htmlFor="password">Votre mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-container">
          <label htmlFor="confirmPassword">Confirmez votre mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirmez le mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          className="account-button"
          type="button"
          onClick={() => {
            handleSubmit();
            notify();
          }}
        >
          S'inscrire
        </button>
        <Toaster />
      </div>
    </div>
  );
}
