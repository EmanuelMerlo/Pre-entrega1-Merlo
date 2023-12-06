import "./ItemListContainer.css"

const ItemListContainer = ({ saludo }) => {
  return (
    <div className="itemlistcontainer">
      <p>{ saludo }</p>
    </div>
  );
};

export default ItemListContainer;
