import { CartWidget } from "./CartWidget/CartWidget.jsx"
import "./NavBar.css"

const Navbar = () => {
  return (
    <div className="navBar">
        <h1>InnoGizmo</h1>
        <ul>
            <li>
                <a href="">INICIO</a>
            </li>
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