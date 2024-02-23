import CaixaReceita, { Receita } from "./CaixaReceita";

function ListaDeReceitas(props) {
    const { receitas } = props;

    return (
    <ul className="grid" role="list">
    {receitas.map((receita: Receita) => (
        <CaixaReceita key={receita.id} receita={receita} />
    ))}
    </ul>
    );
}

export default ListaDeReceitas;