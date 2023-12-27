import { CartWidget } from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/gnb-desktop-120x32.png" alt="Logo Samsung"/>
      </Link>
      <ul>
        <li>
          <Link to="/categoria/celulares">CELULARES</Link>
        </li>
        <li>
          <Link to="/categoria/monitores">MONITORES</Link>
        </li>
        <li>
          <Link to="/categoria/auriculares">AURICULARES</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
