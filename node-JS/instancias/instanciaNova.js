//RETORNANDO UMA FUNÇÃO FACTORY (FUNÇÃO QUE RETORNA UM OBJETO)

module.exports = () => {
    return{
        valor: 1,
        inc() {
            this.valor++
        }
    }
}