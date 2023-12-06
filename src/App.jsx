import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContariner/ItemListContainer";

function App() {
  return (
      <div id="App">
        <Navbar />
        <ItemListContainer saludo = "Bienvenidos al mejor e-commerce" />
      </div>
  );
}

export default App;
