import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Famila {props.familia}</h1>
            <Filho nome="Junior" familia={props.familia}/>
            <Filho nome="joao" familia= {props.familia} />
            <Filho {...props} nome="Maria"/>
        </div>
    )
}