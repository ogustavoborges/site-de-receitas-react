type PropsTypes = {
  children: string;
};

function TituloPagina({ children }: PropsTypes) {
  return <h1>{children}</h1>;
}

export default TituloPagina;
