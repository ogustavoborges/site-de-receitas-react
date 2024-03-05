import { Link, useParams } from "react-router-dom";
import receitas from "../data/foods.json";
import { useEffect} from "react";
import TituloPagina from "../components/TituloPagina";

function PaginaDetalhesReceita() {
  const { id: idDaUrl } = useParams();

  const receita = receitas.filter((receita) => receita.id === idDaUrl)[0];

  // ao montar, e ao ser desmontado
  useEffect(() => {
    document.title = receita.title;
    return () => {
      document.title = "";
    };
  }, []);
  return (
    <section>
      <Link to={"/"}>‹ Todas as Receitas</Link>
      <div className="title">
        <div>
          <TituloPagina>{receita.title}</TituloPagina>
        </div>
        <div className="composition">
          {receita.vegetarian ? (
            <p className="vegetarian">🌿 Vegetariana</p>
          ) : (
            ""
          )}
          {receita.glutenFree ? <p className="gluten">🌾 Sem Glúten</p> : ""}
        </div>
      </div>

      <p className="intro">{receita.description}</p>

      <div className="infos">
        <p className="intro"><b><span>⏲️</span> Tempo de Preparo:</b> {receita.prepTime}</p>
        <p className="intro"><b><span>🍽️</span> Porções:</b> {receita.servings}</p>
      </div>
      


    <div className={receita.videoUrl? "box" : "box-flex"}>
        <div className="ingredients">
          <h3><span>🧺</span> Ingredientes</h3>
          <ul>
            {receita.ingredients.map((value) => {
              return <li key={value}>🛒 {value}</li>;
            })}
          </ul>
        </div>

        {receita.videoUrl ? (
        <div >
          <iframe className="video"
            width="850"
            height="100%"
            src={receita.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        ) : (
          ""
        )}
          <div className="instructions">
        <h3><span>🍱</span> Instruções de preparo</h3>
        <ol>
          {receita.instructions.map((value) => {
            return <li key={value}>{value}</li>;
          })}
        </ol>
      </div>
    </div>
    </section>
  );
}

export default PaginaDetalhesReceita;
