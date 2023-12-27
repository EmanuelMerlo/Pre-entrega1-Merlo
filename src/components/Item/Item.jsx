import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ producto }) => {
  return (
    <div className="card container" key={producto.id}>
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <Link to={`/detalle/${producto.id}`} className="btn btn-outline-dark">Mas info +</Link>
    </div>
  );
};

export default Item;
