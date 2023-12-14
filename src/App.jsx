import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContariner/ItemListContainer";
import "./index.css"

function App() {
  return (
      <div className="app">
        <Navbar />
        <ItemListContainer saludo = "Bienvenidos a InnoGizmo" />
      </div>
  );
}

export default App;
