const clubes = ['Santa Cruz', 'Vila Nova', 'Vitória', 'Náutico', 'Chapecoense']

//FORMA DE EXPORTAR MÓDULO
module.exports = {
    clubes,
    qtdeClubes(){
        return clubes.length
    }
}