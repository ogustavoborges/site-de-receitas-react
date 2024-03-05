import { useNavigate } from "react-router-dom";
import TituloPagina from "../components/TituloPagina";

function PaginaLogin() {
  const navigate = useNavigate();

  function chamarApi(usuario: string, senha: string) {
    // apenas para desmontração, em uma aplicação real jamais essa verificação ficaria no frontend:
    if (usuario === "admin" && senha === "123") return navigate("/");

    alert("Usuário e/ou senha inválidos. Tente novamente.");
  }

  function aoEnviar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = event.currentTarget.usuario.value;
    const senha = event.currentTarget.senha.value;
    chamarApi(user, senha);
  }

  return (
    <>
      <TituloPagina>Entrar no sistema</TituloPagina>
      <form name="login" onSubmit={aoEnviar}>
        <input name="usuario" type="text" placeholder="usuário" />
        <label htmlFor="">😃</label>
        <input name="senha" type="password" id="senha" placeholder="senha" />
        <label htmlFor="senha">🔑</label>
        <button>Entrar</button>
      </form>
    </>
  );
}

export default PaginaLogin;