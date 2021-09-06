// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'John Doe',
    metodo: req.method,
    nome: req.query.nome, //forma de passar os parâmetros através da própria URL
    idade: req.query.idade
    //PODERIA SER ASSIM TAMBÉM:
    //params: JSON.stringify(req.query)
  })
}
