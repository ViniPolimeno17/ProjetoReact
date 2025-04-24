const Lista = () => {
    return(
        <section>
            <h1>Lista de Filmes</h1>
            <hr/>
            <div className="tabela">
                <table>
                    {/* cabeçalho da tabela */}
                    <thead>
                        {/* tr => table row */}
                        <tr className="cabecalho">
                            {/* th => table head */}
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody => corpo da tabela */}
                    <tbody>

                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;