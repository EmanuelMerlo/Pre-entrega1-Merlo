import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

const ItemDetail = ({ producto }) => {
  return (
    <div className="itemdetail">
      <img src={producto.imagen} alt={producto.nombre} />
      <div>
        <h1>{producto.nombre}</h1>
        <p>${producto.precio}</p>
        <p>{producto.descripcion}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
