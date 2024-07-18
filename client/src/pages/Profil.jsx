import { useLoaderData, useNavigate } from "react-router-dom";

export default function Profil() {
  const utilisateurs = useLoaderData();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Vider le localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Rediriger vers la page de connexion
    setTimeout(() => {
      navigate(`/Login`);
    }, 2000);
  };

  return (
    <div className="profil-container">
      <p className="profil-text">Votre Profil</p>
      <p className="text-profil-user-welcome">
        Hello {utilisateurs.username} 👋 !
      </p>
      <div className="logout-button-container">
        <button type="button" className="logout-button" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
      <div className="profil-card-container">
        <p className="text-profil-user">
          <span className="span-style">Votre prénom :</span>{" "}
          {utilisateurs.username}
        </p>
        <p className="text-profil-user">
          {" "}
          <span className="span-style">Votre nom :</span>{" "}
          {utilisateurs.lastname}
        </p>
        <p className="text-profil-user">
          <span className="span-style">Votre adresse mail :</span>{" "}
          {utilisateurs.email}
        </p>
        <p className="text-profil-user">
          <span className="span-style">Votre adresse :</span>{" "}
          {utilisateurs.adresse}
        </p>
        <p className="text-profil-user">
          {" "}
          <span className="span-style">Votre ville :</span> {utilisateurs.ville}
        </p>
        <p className="text-profil-user">
          <span className="span-style">Votre code postal :</span>{" "}
          {utilisateurs.code_postal}
        </p>
      </div>
    </div>
  );
}
