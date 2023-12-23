import "./ItemListContainer.scss"

const ItemListContainer = ({ saludo }) => {
  return (
    <div className="itemlistcontainer">
      <p>{ saludo }</p>
    </div>
  );
};

export default ItemListContainer;
