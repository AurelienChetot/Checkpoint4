import { useLoaderData } from "react-router-dom";

export default function Profil() {
  const utilisateurs = useLoaderData();

  return (
    <div className="profil-container">
      <p className="profil-text">Votre Profil</p>
      <p className="text-profil-user">Hello {utilisateurs.username} 👋 !</p>
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
