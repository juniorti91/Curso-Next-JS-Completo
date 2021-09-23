import { useState } from 'react'
import useSWR from 'swr'

import styles from '../styles/Home.module.scss'

const fetcher = async () => {
    const response = await fetch(`/api/pessoas`)
    return await response.json()
}

function Home() {
    const { data: pessoas, error, mutate } = useSWR('/api/pessoas', fetcher)
    const [id, setId] = useState(null)
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [textoBotao, setTextoBotao] = useState('Adicionar')

    const salvar = async (event) => {
        event.preventDefault()
        if (id) {
            const options = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, telefone })
            }
            await fetch(`/api/pessoas/${id}`, options)
            mutate()
            setTextoBotao('Adicionar')
        } else {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, telefone })
            }
            await fetch(`/api/pessoas`, options)
            mutate()
        }
        setId(null)
        setNome('')
        setTelefone('')
    }

    const editar = async (pessoa) => {
        setId(pessoa.id)
        setNome(pessoa.nome)
        setTelefone(pessoa.telefone)
        setTextoBotao('Atualizar')
    }

    const cancelar = async () => {
        setId(null)
        setNome('')
        setTelefone('')
        setTextoBotao('Adicionar')
    }

    const deletar = async (idPessoa) => {
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }
        await fetch(`/api/pessoas/${idPessoa}`, options)
        mutate()
    }

    if (error) return <div className={styles.container}>Failed to Load</div>

    if (!pessoas) return <div className={styles.container}>Loading...</div>

    return (
        <div className={styles.container}>
            <h1>Agenda</h1>
            <form onSubmit={salvar}>
                <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                <input type="tel" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                <button type="submit">{textoBotao}</button>
                {id && <button onClick={cancelar}>Cancelar</button>}
            </form>
            {
                pessoas.map(pessoa => (
                    <div key={pessoa.id}>
                        <h2>{pessoa.nome} / {pessoa.telefone}</h2>
                        <button onClick={() => editar(pessoa)}>Editar</button>
                        <button onClick={() => deletar(pessoa.id)}>Deletar</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Home