import { Link } from "react-router-dom";


export interface Receita {
  id: number;
  title: string;
  category: string;
  prepTime: string;
  image: string;
  description: string
}
interface CaixaReceitaProps {
  receita: Receita;
}

function CaixaReceita(props: CaixaReceitaProps) {
  const {
    receita: { title, category,  id, image, description},
  } = props;

  return (
    <li className="restaurant-box">
      <Link to={`/receita/${id}`}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <div className="details">
          <span className="small-details">{category}</span>
        </div>
        <p>{description}</p>
      </Link>
    </li>
  );
}

export default CaixaReceita;
