const clubes = ['Palmeiras', 'Corinthians', 'São Paulo', 'Santos', 'Flamengo', 'Fluminense', 'Botafogo','Vasco', 'Cruzeiro', 'Atlético-MG', 'Grêmio', 'Internacional']

let sp = []
for(let i=0; i < clubes.length; i++){
    if(clubes[i] == 'Palmeiras' ||
    clubes[i] == 'Corinthians' ||
    clubes[i] == 'São Paulo' ||
    clubes[i] == 'Santos'){
        sp.push(clubes[i])
    }
}

//FORMA DE EXPORTAR MÓDULO
module.exports.clubesPaulistas = sp
module.exports.qtdeClubesPaulistas = sp.length