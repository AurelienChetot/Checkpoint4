import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Account() {
  const notify = () => toast("Votre compte a bien été créé.");
  const notifyError = (message) => toast.error(message);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    adresse: "",
    ville: "",
    codePostal: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const {
      username,
      lastname,
      email,
      adresse,
      ville,
      codePostal,
      password,
      confirmPassword,
    } = formData;
    if (
      !username ||
      !lastname ||
      !email ||
      !adresse ||
      !ville ||
      !codePostal ||
      !password ||
      !confirmPassword
    ) {
      notifyError("Veuillez remplir tous les champs.");
      return false;
    }
    if (password !== confirmPassword) {
      notifyError("Les mots de passe ne correspondent pas.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      const { confirmPassword, codePostal, ...userData } = formData;
      const dataToSend = { ...userData, code_postal: codePostal };

      const response = await axios.post(
        "http://localhost:3310/api/utilisateurs",
        dataToSend
      );

      if (response.status === 201) {
        notify();
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      } else {
        throw new Error(
          "Une erreur s'est produite lors de la création du compte !"
        );
      }
    } catch (error) {
      notifyError("Une erreur s'est produite lors de la création du compte !");
      console.error("Erreur:", error);
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
          <label htmlFor="codePostal">Votre code postal</label>
          <input
            type="text"
            name="codePostal"
            id="codePostal"
            placeholder="Votre code postal"
            value={formData.codePostal}
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
          }}
        >
          S'inscrire
        </button>
        <Toaster />
      </div>
    </div>
  );
}
