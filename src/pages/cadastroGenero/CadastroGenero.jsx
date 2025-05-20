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

    //Só criamos useState quanod guardar uma informação que muda e que o React precisa acompanhar.
    // Quem eu vou manipular?
    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);
    // const [excluirGenero, setExcluirGenero] = useState("");

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


    async function cadastrarGenero(e) {
        e.preventDefault();
        //verificar se o input esta vindo vazio
        if (genero.trim() != "") {

            try {
                //cadastrar um gênero: post
                await api.post("genero", { nome: genero });
                alertar("success", "Cadastro realizando com sucesso!");
                setGenero("");
                //atualize minha lista assim que cadastrar um novo genero
                listarGenero();
            } catch (error) {
                alertar("error", "Erro, entre em contato com o suporte!")
            }
        } else {
            alertar("error", "Erro! Preencha o campo")
        }


    }
    // sincrona funciona simultaneamente
    //assincrona => Esperar açgo/resposta para ur pra outro bloco de codigo
    async function listarGenero() {
        try {
            //await -> Aguarde tr uma resposta da solicitação
            const resposta = await api.get("genero");
            // console.log(resposta.data[3]);           
            // console.log(resposta.data[3].idGenero);           
            // console.log(resposta.data[3].nome);           
            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Assim que a página renderizar, o metodo listarGenero()será chamado
    useEffect(() => {
        listarGenero();
        //ao nascer
        //alterada(excluir, editar um item pu adonar um item)
    }, [listarGenero]);


    //Função de excluir o genero ;)
    async function excluirGenero(generoId) {
        
            Swal.fire({
                title: "Você tem certeza?",
                text: "Você não vai conseguir reverter isso!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, quero deletar!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        await api.delete(`genero/${generoId.idGenero}`);
                        alertar("success", "Gênero excluido com sucesso!");
                        listaGenero();
                        
                    } catch (error) {
                        console.log(error);                  
                    }
                    // Swal.fire({
                    //     title: "Deletado!",
                    //     text: "seu arquivo foi apagado com sucesso!",
                    //     icon: "success"
                    // });
                }
            });
            // Alerta - fim        
    }

    //teste: validar o genero
    // useEffect(<function>, <depedency>)
    // useEffect(() => {
    //     console.log(genero);        
    // },[genero]);
    // fim do teste

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
                <Lista Lista="Gênero" visible="none" lista={listaGenero} funcExcluir={excluirGenero} />

            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;