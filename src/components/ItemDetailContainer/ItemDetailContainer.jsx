import "./ItemDetailContainer.scss"
import obtenerProductos from "../utils/data";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const { id } = useParams()

  useEffect(()=> {
    obtenerProductos
    .then((res)=>{
      const productoEcontrado = res.find( (producto)=> producto.id === id )
      setProducto(productoEcontrado)
    })
  }, [])

  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer