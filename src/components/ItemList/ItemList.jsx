import Item from "../Item/Item";
import "./itemList.scss";

const ItemList = ({ productos }) => {
  return (
    <div className="itemlist">
      {productos.map((producto) => (
        <Item producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
