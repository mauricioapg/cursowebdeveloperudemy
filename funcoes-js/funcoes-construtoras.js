function Carro (velocidadeMaxima = 200, variacao = 5) {
    //atributo privado (só visível dentro da função)
    let velocidadeAtual = 0

    //método público (usando THIS)
    this.acelerar = function(){
        if(velocidadeAtual < velocidadeMaxima){
            velocidadeAtual += variacao
        }
        else{
            velocidadeAtual += velocidadeMaxima
        }
        console.log('acelerou')
        console.log('Velocidade atual = ' + velocidadeAtual)
    }

    //método público (usando THIS)
    this.frear = () => {
        if(velocidadeAtual > 0){
            velocidadeAtual -= variacao
        }
        else{
            velocidadeAtual = 0
        }
        console.log('freou')
        console.log('Velocidade atual = ' + velocidadeAtual)
    }

    //método público GET que retorna o atribuito Velocidade Atual
    this.getVelocidadeAtual = function(){
        return 'Velocidade atual = ' + velocidadeAtual
    }
}

const carro = new Carro(1000, 50)
carro.acelerar()
carro.acelerar()
carro.frear()
console.log('\nChegada: ' + carro.getVelocidadeAtual())