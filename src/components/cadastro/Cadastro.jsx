
import "./Cadastro.css";
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return(
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} className="layout_grid  form_cadastro" >
                 <h1>{props.tituloCadastro}</h1>
                <hr /> 
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="Nome">Nome</label>
                        <input type="text" name="Nome" placeholder={`Digite o nome do ${props.placeholder}`} value={props.valorInput} onChange={(e) => props.setValorInput(e.target.value)}/>
                    </div>
                  <div className="campo_cad_genero" style={{display:props.visibilidade}}>
                        <label htmlFor="Genero">Gênero</label>
                       <select name="genero" id=""
                       value={props.valorSelect} onChange={(e) => props.setValorSelect(e.target.value)}>                     
                            <option value="" disabled selected>Selecione</option>
                            {props.lista && props.lista.length > 0 && props.lista.map((itemGenero) => <option value={itemGenero.idGenero}>{itemGenero.nome}</option>)}
                        </select>
                    </div>
                    <Botao nomeDoBotao="Cadastrar"/>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;