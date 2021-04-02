const imprimirTrimestre = (mes) => {
    switch(mes){
        case 'Janeiro':
        case 'Fevereiro':
        case 'Março':
            console.log('1º trimestre')
            break;
        case 'Abril':
        case 'Maio':
        case 'Junho':
            console.log('2º trimestre')
            break;
        case 'Julho':
        case 'Agosto':
        case 'Setembro':
            console.log('3º trimestre')
            break;
        case 'Outubro':
        case 'Novembro':
        case 'Dezembro':
            console.log('4º trimestre')
            break;
        default:
            console.log('Mês inválido')
    }
}

imprimirTrimestre('Dezembro')