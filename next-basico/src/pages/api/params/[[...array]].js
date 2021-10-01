export default function params(req, res) {
    res.status(200).json({
        params: req.query
    })
}
//criação de um array de parametros.