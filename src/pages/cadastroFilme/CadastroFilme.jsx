import { Fragment, useEffect, useState } from "react";
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";
import Swal from 'sweetalert2';

const CadastroFilme = () => {

    const [listaGenero, setlistaGenero] = useState([]);
    const [genero, setGenero] = useState("")
    const [filme, setFilme] = useState("")

    function alertar(icone, mensagem) {
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

    // Função para trazer os generos do select
    async function listarGenero(){
        try {
            const resposta = await api.get("genero");
            setlistaGenero(resposta.data);
        } catch (error) {
            console.log(error);               
        }
    }
    async function cadastrarFilme(){
        if(filme.trim() !== ""){ 
        try {
            await api.post("filme", {titulo: filme, idGenero: genero})
            alertar("success", "sucesso")
            setFilme("");
            setGenero("");
        } catch (error) {
            console.log(error);
        }
        }else {
            alertar("error", "Erro! preencha os campos")
        }
    }
    useEffect(() => {
        listarGenero();
    }, []);


    return(
        <Fragment>
            <Header/>
            <main>
                <Cadastro tituloCadastro="Cadastro de Filme" placeholder="Filme"  
                    lista = {listaGenero}
                
                />
                <Lista nomeLista="Filme"
                funCadastro ={cadastrarFilme}
                
                valorInput = {filme}
                setValorInput ={setFilme}

                valorSelect={genero}
                setValorSelect={setGenero}
                />
            </main>
            <Footer/>
        </Fragment>
    )
}

export default CadastroFilme;