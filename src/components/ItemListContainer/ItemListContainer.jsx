import "./ItemListContainer.scss";
import obtenerProductos from "../utils/data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams()

  useEffect(() => {
    obtenerProductos
      .then((res) => {
        if(categoria){
          const productosFiltrados = res.filter((producto)=> producto.categoria === categoria)
          setProductos(productosFiltrados)
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, [categoria]);

  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer;
