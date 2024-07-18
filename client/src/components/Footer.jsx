import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useAuth from "../contexts/AuthContext";

function Footer() {
  const isAuthenticated = useAuth();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.id) {
        setUserId(user.id);
      }
    }
  }, []);
  return (
    <div className="footer-container">
      <div className="link-container">
        <Link to="/" className="style-link">
          Accueil
        </Link>
        <Link
          to={isAuthenticated && userId ? `/Profil/${userId}` : "/Login"}
          className="style-link"
        >
          Mon Compte
        </Link>
        <Link to="/Contact" className="style-link">
          Contact
        </Link>
        <Link to="/About" className="style-link">
          A propos
        </Link>
      </div>
      <div className="text-footer-container">
        <p>
          © Copyright 2024. Dev by{" "}
          <a
            href="https://portfolio-aurelienchetot.netlify.app/"
            target="/blank"
          >
            Aurélien
          </a>
        </p>
      </div>
      <div className="react-icons-container">
        <Link to="https://github.com/AurelienChetot" target="/blank">
          <FaGithub className="icons-color" size={28} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/aur%C3%A9lien-chetot-6861852b2/"
          target="/blank"
        >
          <FaLinkedin className="icons-color" size={28} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
