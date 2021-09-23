import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, '../db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// consultar todas as pessoas
export async function findAll() {
    await db.read()
    // se não tem dados, adiciona uma lista vazia de pessoas para substituir o null
    db.data ||= { pessoas: [] }
    const { pessoas } = db.data
    // console.log(pessoas)
    return pessoas
}

// consultar uma pessoa
export async function findOne(idPessoa) {
    await db.read()
    // se não tem dados, adiciona uma lista vazia de pessoas para substituir o null
    db.data ||= { pessoas: [] }
    const { pessoas } = db.data
    // console.log(pessoas)
    // const pessoa = pessoas.filter({ id: idPessoa }).value()
    const pessoa = pessoas.find(p => p.id == idPessoa)
    // console.log(pessoa)
    return pessoa
}

// cadastrar uma pessoa
export async function saveOne(pessoa) {
    await db.read()
    // se não tem dados, adiciona uma lista vazia de pessoas para substituir o null
    db.data ||= { pessoas: [] }
    const { pessoas } = db.data
    // console.log(pessoas)
    // pegar o último id
    const id = Math.max(...pessoas.map(p => p.id), 0)
    // console.log('Último ID: ' + id)
    // const pessoa = pessoas.filter({ id: idPessoa }).value()
    const save = { id: id + 1, ...pessoa }
    pessoas.push(save)
    // console.log(pessoa)
    await db.write()
    return save
}

// atualizar uma pessoa
export async function updateOne(update) {
    await db.read()
    db.data ||= { pessoas: [] }
    const { pessoas } = db.data
    let pessoa = pessoas.find(p => p.id == update.id) || null
    if (!pessoa) {
        return null
    }
    let igual = true
    if (update.nome != undefined && pessoa.nome != update.nome) {
        pessoa.nome = update.nome
        igual = false
    }
    if (update.telefone != undefined && pessoa.telefone != update.telefone) {
        pessoa.telefone = update.telefone
        igual = false
    }
    if (igual) {
        return pessoa
    }
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == pessoa.id) {
            pessoas[i] = pessoa
        }
    }
    db.data.pessoas = pessoas
    await db.write()
    return pessoa
}

// deletar uma pessoa
export async function deleteOne(idPessoa) {
    await db.read()
    // se não tem dados, adiciona uma lista vazia de pessoas para substituir o null
    db.data ||= { pessoas: [] }
    let { pessoas } = db.data
    // console.log(pessoas)
    const pessoa = pessoas.find(p => p.id == idPessoa)
    pessoas = pessoas.filter(p => p.id != idPessoa)
    db.data.pessoas = pessoas
    // console.log(pessoas)
    // console.log(pessoa)
    await db.write()
    return pessoa
}