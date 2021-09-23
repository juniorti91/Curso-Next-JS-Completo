export default function repeticao1() {

    const listaAprovados = [
        'Joao',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ]

    function renderizarLista() {
        
        // return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
        
        return listaAprovados.map(function(nome, i) {
            return <li key={i}>{nome}</li>
        })
    }

    return (
        <ul> 
            {/* pega a funcao rendezirar lista com o dados do array listaAprovados e lista no site */}
            {renderizarLista()} 
        </ul>
    )
}

// function renderizarLista() {
//     const itens = []

//     for(let i = 0; i < listaAprovados.length; i++) {
//         itens.push(<li key={i}>{listaAprovados[i]}</li>)
//     }
    
//     //pega os dados de todos os usuários do array listaAprovados e passa para a funcao renderizarLista no array itens
//     return itens 
// }