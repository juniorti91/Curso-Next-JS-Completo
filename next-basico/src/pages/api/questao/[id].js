export default function questao(req, res) {
    if (req.method === "GET") {
        get(req, res)
    } else {
        req.status(405).send() //se o usuário não estiver fazendo um GET ele retornará um erro 404
    }
}


function get(req, res) {
    if (req.method === "GET") {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'Qual é a sua cor preferida?',
            respostas: [
                'Branca', 'Vermelha', 'Amarela', 'Verde'
            ]
        })
    }
}