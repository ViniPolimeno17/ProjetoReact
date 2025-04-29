import Header from '../../components/header/Header';
import Cadastro from '../../components/cadastro/Cadastro';
import Footer from '../../components/footer/Footer';
import Lista from '../../components/lista/Lista';
import './CadastroGenero.css';

const CadastroGenero = () => {
    return(
        <>
            <Header/>
            <main>
                <Cadastro 
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    placeholder="Gênero"
                    />
                <Lista lista="Gênero" visible="none"/>
                    
            </main>
            <Footer/>
        </>
    )
}

export default CadastroGenero;