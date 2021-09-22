
import styles from '../styles/Subdivisao.module.css'

export default function Subdivisao(props) {
    return (
        <div 
            style={{ // se props for preto ira aplicar a preta, caso contrario ira aplicar a cor branca
                backgroundColor: props.preta ? "#000" : "#fff"
            }}
            className={styles.subdivisao}>
            
        </div>
    )
}