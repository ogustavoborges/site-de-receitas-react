function CaixaDeBusca(props: { busca: any; definirBusca: any; }) {
    const { busca, definirBusca } = props;
    return (
    <>
    <input
        type="text"
        placeholder="Pesquisar pelo título da receita ou pela categoria."
        id="search"
        value={busca}
        onChange={(e) => definirBusca(e.target.value)}
    />
    <label htmlFor="search">🔎</label>
    </>
);
}

export default CaixaDeBusca;
