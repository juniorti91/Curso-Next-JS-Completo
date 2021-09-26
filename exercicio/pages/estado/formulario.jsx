import { useState } from "react"

export default function formulario() {

    // const [valor, setValor] = useState("inicial"); //componente controlado
    const [valor, setValor] = useState(undefined); //compponente não-controlado

    function alterarInput() {
        setValor(valor + "!")
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <span>{valor}</span>
            <input type="text" value={valor}
                onChange={e => setValor(e.target.value)}
            />
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}