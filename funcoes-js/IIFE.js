//IIFE - Immediately Invoked Function Expression (funções auto-invocadas)

(function(){
    console.log('Função auto invocada. Será executada já no momento da sua declaração')
    console.log('Tudo que for definido aqui estraá fora do escopo global')
})() //esses 2 parênteses são responsáveis por executar a função na hora