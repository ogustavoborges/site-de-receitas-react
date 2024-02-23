import CaixaReceita, { Receita } from "../components/CaixaReceita";
import TituloPagina from "../components/TituloPagina";
import receitas from "../data/foods.json";

function PaginaReceitas() {

  return (
    <section>
      <TituloPagina>Receitas Culinárias</TituloPagina>
        <div>
          <ul className="grid" role="list">
            {receitas.map((receita) => (
              <CaixaReceita
                key={receita.id}
                receita={receita}
              />
            ))}
          </ul>
        </div>
    </section>
  );
}

export default PaginaReceitas;
