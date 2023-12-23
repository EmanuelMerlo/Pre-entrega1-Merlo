import { CartWidget } from "../CartWidget/CartWidget.jsx"
import "./NavBar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="brand">
            <h1>SONY</h1>
        </div>
        <ul>
            <li>
                <a href="">PRODUCTOS</a>
            </li>
            <li>
                <a href="">ACERCA DE NOSOTROS</a>
            </li>
            <li>
                <a href="">CONTACTO</a>
            </li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default Navbar