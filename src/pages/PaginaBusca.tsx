import { useState } from "react";
import CaixaDeBusca from "../components/CaixaDeBusca";
import TituloPagina from "../components/TituloPagina";
import ListaDeReceitas from "../components/ListaDeReceitas";
import todasReceitas from "../data/foods.json";

function PaginaBusca() {
    const [filtro, definirFiltro] = useState("");

    const aplicarCriteriosDeBusca =  ({title,category}: {title: string; category: string; }) => {
        return (
            valorContemTextoFiltro(title) ||
            valorContemTextoFiltro(category)
        );
    }

    function valorContemTextoFiltro(valor: string) {
        return valor.toLowerCase().includes(filtro.toLowerCase());
    }


    const receitasFiltradas = todasReceitas.filter(({ title, category }: {title: string; category: string; }) => {
        aplicarCriteriosDeBusca({ title, category })
    });
    
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