import { findAll, saveOne } from "../../../services/pessoa.service"

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            // console.log('GET /api/pessoas')
            const pessoas = await findAll()
            res.status(200).json(pessoas)
            break

        case 'POST':
            const { nome, telefone } = req.body
            if (nome == undefined || telefone == undefined) {
                res.status(405).json({ error: 'Bad Request', status: 400 })
                break
            }
            const pessoa = { nome, telefone }
            const saved = await saveOne(pessoa)
            res.status(200).json(saved)
            break

        default:
            res.status(405).json({ error: 'Method Not Allowed', status: 405 })
    }
}
