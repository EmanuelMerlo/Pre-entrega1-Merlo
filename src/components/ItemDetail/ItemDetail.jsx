import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.scss"

const ItemDetail = ( {producto} ) => {
  return (
    <div className="container">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <ItemCount/>
    </div>
  )
}

export default ItemDetail