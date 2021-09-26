import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay";

export default function contador() {

    const [numero, setNumero] = useState(0);

    const incremento = () => setNumero(numero + 1);
    const decremento = () => setNumero(numero - 1);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "center",

        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />
            <div>
                <button onClick={decremento}>-</button>
                <button onClick={incremento}>+</button>
            </div>
            <div>Valor {numero}</div>

        </div>
    )
}