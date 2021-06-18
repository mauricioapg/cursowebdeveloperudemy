/* função para criar um novo elemento HTML e definir sua classe */
function criarElemento(tagName, className) {
    const elemento = document.createElement(tagName)
    elemento.className = className
    return elemento
}

function Barreira(reversa = false) {
    this.elemento = criarElemento('div', 'barreira') /* chama a função para criar um novo elemento */

    const borda = criarElemento('div', 'borda')
    const corpo = criarElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function ParBarreiras(altura, abertura, eixoX) {
    this.elemento = criarElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) /* pega a primeira posição após fazer a divisão split */
    this.setX = eixoX => this.elemento.style.left = `${eixoX}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(eixoX)
}

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParBarreiras(altura, abertura, largura),
        new ParBarreiras(altura, abertura, largura + espaco),
        new ParBarreiras(altura, abertura, largura + espaco * 2),
        new ParBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if (cruzouOMeio) {
                notificarPonto()
            }
        })
    }

}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = criarElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true /* quando alguma tecla for pressionada */
    window.onkeyup = e => voando = false /* quando nenhuma tecla estiver pressionada */

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        }
        else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        }
        else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

function Progresso() {
    this.elemento = criarElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function estaoSobrepostos(elementoA, elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function colisao(passaro, barreiras){
    let colisao = false
    barreiras.pares.forEach(parDeBarreiras => {
        if(!colisao){
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colisao = estaoSobrepostos(passaro.elemento, superior)
            || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colisao
}

function FlappyBird() {
    let pontos = 0

    const areaJogo = document.querySelector('[wm-flappy]')
    const altura = areaJogo.clientHeight
    const largura = areaJogo.clientWidth

    const progresso = new Progresso()
    const passaro = new Passaro(altura)
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))

    areaJogo.appendChild(progresso.elemento)
    areaJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaJogo.appendChild(par.elemento))

    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if(colisao(passaro, barreiras)){
                clearInterval(temporizador)
            }
        }, 20);
    }
}

new FlappyBird().start()