
function gerarLista(final) {
    
    const lista = []
    for (let i = 1; i <= final; i++) {
        lista.push(<span>{i},</span>)        
    }
    return lista
}


export  default function lista2() {
    return (
        <div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                {gerarLista(30)}
            </div>
        </div>
    )
}