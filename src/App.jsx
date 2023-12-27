import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="categoria/:categoria" element={<ItemListContainer />}/>
          <Route path="detalle/:id" element={<ItemDetailContainer />}/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;

//CLASE 4 1:25:48 CLASE SOBRE HOOKS QUE ME QUEDÉ MEDIO ATRASADO CON ESO. ES SOLO REPASO --- CLASE COMPONENTES I
