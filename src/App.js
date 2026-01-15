import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import CadastroForm from "./components/CadastroForm";
import AdminProdutos from "./pages/AdminProdutos";
import AliancaPrata from "./pages/AliancaPrata";
import AliancaOuro from "./pages/AliancaOuro";
import ColaresFemininos from "./pages/ColaresFemininos";
import CorrentariaMasculina from "./pages/CorrentariaMasculina";
import PulseirasFemininas from "./pages/PulseirasFemininas";
import PulseirasMasculinas from "./pages/PulseirasMasculinas";
import AneisFormaturaOuro from "./pages/AneisFormaturaOuro";
import AneisFormaturaPrata from "./pages/AneisFormaturaPrata";
import Personalizados from "./pages/Personalizados";

import Loja from "./pages/Loja";
import Contato from "./pages/Contatos";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroForm />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/admin" element={<AdminProdutos />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/catalogo/alianca-prata" element={<AliancaPrata/>} />
        <Route path="/catalogo/alianca-ouro" element={<AliancaOuro />} />
        <Route path="/catalogo/colaresfemininos" element={<ColaresFemininos />} />
        <Route path="/catalogo/correntariamasculina" element={<CorrentariaMasculina />} />
        <Route path="/catalogo/pulseirasfemininas" element={<PulseirasFemininas />} />
        <Route path="/catalogo/pulseirasmasculinas" element={<PulseirasMasculinas />} />
        <Route path="/catalogo/aneisformatura-ouro" element={<AneisFormaturaOuro />} />
        <Route path="/catalogo/aneisformatura-prata" element={<AneisFormaturaPrata />} />
        <Route path="/catalogo/personalizados" element={<Personalizados />} />
        <Route path="/personalizados" element={<Personalizados />} />

        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

