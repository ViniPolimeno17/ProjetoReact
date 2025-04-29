import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* https://localhost:3000/ => Login */}
                <Route path="/" element={<Login/>} exact/>
                {/* https://localhost:3000/Filme => Cadastro de filmes*/}
                <Route path="/Filme" element={<CadastroFilme/>}/>
                {/* https://localhost:3000/Filme => Cadastro de filmes*/}
                <Route path="/Genero" element={<CadastroGenero/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;