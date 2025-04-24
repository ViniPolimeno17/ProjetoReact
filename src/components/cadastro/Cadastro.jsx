
import "./Cadastro.css";
import Botao from "../botao/Botao";

const Cadastro = () => {
    return(
        <section className="section_cadastro">
            <form action="" className="layout_grid  form_cadastro" >
                <h1>Cadastro de Filme</h1>
                <hr /> 
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="Nome">Nome</label>
                        <input type="text" name="Nome" placeholder="Digite o nome do Filme"/>
                    </div>
                    <div className="campo_cad_genero">
                        <label htmlFor="Genero">Gênero</label>
                        <select name="genero" id="">
                            <option value="" disabled selected>Selecione</option> {/* Serve para a opção já vim selecionada */}
                            <option value="">op 1</option>
                            <option value="">op 2</option>
                            <option value="">op 3</option>
                        </select>
                    </div>
                    <Botao/>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;