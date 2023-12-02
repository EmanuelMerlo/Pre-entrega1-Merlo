import { CartWidget } from "./CartWidget"
import "./NavBar.css"

const Navbar = () => {
  return (
    <div id="navbar">
        <h1>E-COMMERCE</h1>
        <ul>
            <li>
                <a href="">prod1</a>
            </li>
            <li>
                <a href="">prod2</a>
            </li>
            <li>
                <a href="">prod3</a>
            </li>
            <li>
                <a href="">prod4</a>
            </li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default Navbar