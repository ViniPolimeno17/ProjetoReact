import { useEffect, useState } from 'react';

//importar o sweet alert
import Swal from 'sweetalert2'

// importação de componentes:
import Cadastro from '../../components/cadastro/Cadastro';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Lista from '../../components/lista/Lista';
import api from '../../Services/services';
import './CadastroGenero.css';

const CadastroGenero = () => {

    //nome do genero
    const [genero, setGenero] = useState("");

    function alerta(icone, mensagem){
        const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: icone,
                    title: mensagem
                });


                //---------FIM DO ALERTA--------------
    }

    async function cadastrarGenero(e) {
        e.preventDefault();
        //verificar se o input esta vindo vazio
        if (genero.trim() != "") {

            try {
                //cadastrar um gênero: post
                await api.post("genero", { nome: genero });
                alerta("success", "Cadastro realizando com sucesso!")
                setGenero("");
            } catch (error) {
                alerta("error", "Erro, entre em contato com o suporte!")
            }
        } else {
           alerta("error", "Erro! Preencha o campo")
        }

        //teste: validar o genero
        // useEffect(<function>, <depedency>)
        // useEffect(() => {
        //     console.log(genero);        
        // },[genero]);
        // fim do teste

    }


    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    placeholder="Gênero"
                    //Atribuindo a função:
                    funcCadastro={cadastrarGenero}
                    //Atribuindo o valor ao input
                    valorInput={genero}
                    //Atribuindo a função que atualiza o meu genero
                    setValorInput={setGenero}
                />
                <Lista lista="Gênero" visible="none" />

            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;