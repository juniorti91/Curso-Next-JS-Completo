export default function SomentePar(props) {

    const numeroPar = props.numero % 2 === 0
    return (
        <div>
            {numeroPar ? //caso seja verdadeiro retona o valor abaixo
                <span>{props.numero}</span> :
                null
            }
        </div>
    )

    // if (props.numero % 2 === 0) {// verifica se o numero é par ou impar
    //     return <span>{props.numero}</span>
    // } else {
    //     return null
    // }
}