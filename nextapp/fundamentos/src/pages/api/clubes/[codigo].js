export default function clubesPorCodigo(req, res) {

    const codigo = req.query.codigo

    //Outra forma de pegar os parâmetros, através do código sendo passado entre chaves no nome do arquivo
    res.status(200).json(
        {
            id: `${codigo}`,
            nome: 'Palmeiras',
            fundacao: '1914',
            corPrimaria: 'Verde',
            corSecundaria: 'Branco'
        }
    )
}