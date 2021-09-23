function Contato({ contato, editar, deletar }) {
    return (
        <div>
            <h2>{contato.nome} - {contato.telefone}</h2>
            <button onClick={() => editar(contato)}>Editar</button>
            <button onClick={() => deletar(contato.id)}>Deletar</button>
        </div>
    )
}

export default Contato