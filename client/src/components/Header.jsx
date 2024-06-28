import LOGO from "../assets/svg/logoyourmarket.svg";
import USER from "../assets/svg/user.svg";

function Header() {
  return (
    <div className="header-container">
      <img className="logo-market-style" src={LOGO} alt="Logo-Your-Market" />
      <img className="logo-user-style" src={USER} alt="icone-user" />
    </div>
  );
}

export default Header;
