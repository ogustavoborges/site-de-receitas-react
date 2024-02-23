import PaginaBusca from "../pages/PaginaBusca";
import PaginaDetalhesReceita from "../pages/PaginaDetalhesReceita";
import PaginaLogin from "../pages/PaginaLogin";
import PaginaReceitas from "../pages/PaginaReceitas";

import { Route, Routes } from "react-router-dom";

function Rotas() {
  return (
    // Qual é o caminho, e o que será exibido naquele caminho
    <Routes>
      <Route path="/" element={<PaginaReceitas />} />
      <Route path="/login" element={<PaginaLogin />} />
      <Route path="/buscar" element={<PaginaBusca />} />
      <Route path="/receita/:id" element={<PaginaDetalhesReceita/>} />
    </Routes>
  );
}

export default Rotas;
