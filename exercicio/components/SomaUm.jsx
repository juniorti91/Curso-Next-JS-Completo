export default function SomaUm(props) {
    //Obs: as propriedades sào somente leitura
    //props.numero++
    return (
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}