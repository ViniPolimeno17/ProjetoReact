import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao";



const Login = () => {
    return(
        <main className= "main_login">
           <div className="banner"></div>
           <section className="section_login">
            <img src={Logo} alt="Logo do Filmoteca" />
            <form action="" className="form_login">
                <h1>login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail"/>
                    </div> 
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <Botao nomeDoBotao="Entrar"/>
            </form>
           </section>
        </main>
    )
}

export default Login;