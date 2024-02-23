import { useState } from "react";
import CaixaDeBusca from "../components/CaixaDeBusca";
import TituloPagina from "../components/TituloPagina";
import ListaDeReceitas from "../components/ListaDeReceitas";
import todasReceitas from "../data/foods.json";
import { Receita } from "../components/CaixaReceita";

function PaginaBusca() {
    const [filtro, definirFiltro] = useState("");

    function aplicarCriteriosDeBusca({
    title,
    category,
    }: Receita) {
    return (
    valorContemTextoFiltro(title) ||
    valorContemTextoFiltro(category));
    }

    function valorContemTextoFiltro(valor: string) {
        return valor.toLowerCase().includes(filtro.toLowerCase());
    }

    const receitasFiltradas = todasReceitas.filter(aplicarCriteriosDeBusca);

    return (
    <>
    <TituloPagina>Buscar</TituloPagina>
    <CaixaDeBusca busca={filtro} definirBusca={definirFiltro} />
    {filtro ? (
        <ListaDeReceitas receitas={receitasFiltradas} />
    ) : (
        <></>
    )}
    </>
);
}

export default PaginaBusca;