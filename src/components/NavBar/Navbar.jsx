import { CartWidget } from "../CartWidget/CartWidget.jsx"
import "./NavBar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="brand">
            <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/gnb-desktop-120x32.png" alt="Logo Samsung" />
        </div>
        <ul>
            <li>
                <a href="">CELULARES</a>
            </li>
            <li>
                <a href="">NOTEBOOKS</a>
            </li>
            <li>
                <a href="">ACCESORIOS</a>
            </li>
            <li>
                <a href="">NOSOTROS</a>
            </li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default Navbar