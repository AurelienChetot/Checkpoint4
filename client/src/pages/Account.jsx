export default function Account() {
  return (
    <div className="account-container">
      <div className="account-container-form">
        <p className="account-style">S'enrengistrez</p>
        <div className="form-container">
          <label htmlFor="username">Votre Prénom</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Votre Prénom"
          />
        </div>
        <div className="form-container">
          <label htmlFor="lastname">Votre Nom</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Votre Nom"
          />
        </div>
        <div className="form-container">
          <label htmlFor="email">Votre adresse mail</label>
          <input type="text" name="email" id="email" placeholder="Votre mail" />
        </div>
        <div className="form-container">
          <label htmlFor="adresse">Votre adresse</label>
          <input
            type="text"
            name="adresse"
            id="adresse"
            placeholder="Votre adresse"
          />
        </div>
        <div className="form-container">
          <label htmlFor="ville">Votre ville</label>
          <input
            type="text"
            name="ville"
            id="ville"
            placeholder="Votre ville"
          />
        </div>
        <div className="form-container">
          <label htmlFor="code_postal">Votre code postal</label>
          <input
            type="text"
            name="code_postal"
            id="code_postal"
            placeholder="Votre code postal"
          />
        </div>
        <div className="form-container">
          <label htmlFor="password">Votre mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <div className="form-container">
          <label htmlFor="confirm-password">Confirmez votre mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirmez le mot de passe"
          />
        </div>
        <button className="account-button" type="button">
          S'inscrire
        </button>
      </div>
    </div>
  );
}
