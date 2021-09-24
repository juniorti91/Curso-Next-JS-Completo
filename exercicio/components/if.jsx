export default function If(props) {
    
    if (props.teste) { //técnica para executar renderização profissional
        return props.children
    } else {
        return null
    }
}