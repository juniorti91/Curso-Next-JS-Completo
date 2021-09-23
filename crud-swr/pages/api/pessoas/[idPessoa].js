import { findOne, updateOne, deleteOne } from "../../../services/pessoa.service"

export default async function handler(req, res) {
    const { method, query } = req
    const { idPessoa } = query
    switch (method) {
        case 'GET':
            if (idPessoa) {
                const pessoa = await findOne(idPessoa)
                if (pessoa) {
                    res.status(200).json(pessoa)
                    break
                }
            }
            res.status(404).json({ status: 404, error: 'Not Found' })
            break

        case 'PATCH':
            if (idPessoa) {
                const { nome, telefone } = req.body
                const update = { id: idPessoa }
                if (nome != undefined) {
                    update.nome = nome
                }
                if (telefone != undefined) {
                    update.telefone = telefone
                }
                const pessoa = await updateOne(update)
                if (pessoa) {
                    res.status(200).json(pessoa)
                    break
                }
            }
            res.status(404).json({ status: 404, error: 'Not Found' })
            break

        case 'DELETE':
            if (idPessoa) {
                const pessoa = await deleteOne(idPessoa)
                if (pessoa) {
                    res.status(200).json(pessoa)
                    break
                }
            }
            res.status(404).json({ status: 404, error: 'Not Found' })
            break

        default:
            res.status(405).json({ status: 405, error: 'Method Not Allowed' })
    }
}
