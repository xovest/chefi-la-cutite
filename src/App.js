import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipala from "./pages/PaginaPrincipala";
import Sezoane from './pages/Sezoane';
import Concurenti from './pages/Concurenti';
import Amulete from './pages/Amulete';
import Battleuri from './pages/Battleuri';
import Retete from './pages/Retete';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<PaginaPrincipala />} />
        <Route path="/sezoane" element={<Sezoane />} />
        <Route path="/concurenti" element={<Concurenti />} />
        <Route path="/amulete" element={<Amulete />} />
        <Route path="/battleuri" element={<Battleuri />} />
        <Route path="/retete" element={<Retete />} />
      </Routes>
    </Router>
  );
}

export default App;
