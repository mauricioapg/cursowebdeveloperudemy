export default function handler(req, res) {
    if (req.method === 'GET') {
        getClubes(req, res)
    }
    else {
        res.status(405).send()
    }
}

function getClubes(req, res) {
    res.status(200).json({
        id: 1,
        nome: 'Palmeiras',
        fundacao: 1914,
        corPrimaria: 'Verde',
        corSecudaria: 'Branco'
    })
}