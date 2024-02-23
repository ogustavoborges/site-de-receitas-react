import  "./App.scss";
import Rotas from "./components/Rotas";

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <Link to={"/"}><img height="100" width="100" src="/casa.png" alt="" /> La Maison Blanche</Link>
            <div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <Rotas />
      </div>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
