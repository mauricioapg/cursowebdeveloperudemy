//Temporizador para criar tarefas agendadas
//FORMA 1
const schedule = require('node-schedule')

//const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 6', function(){
  //  console.log('Executando tarefa 1: ', new Date().getSeconds() + ' segundos')
//})

//forma de cancelar uma tarefa agendada pelo schedule
//setTimeout(function(){
  //  tarefa1.cancel()
    //console.log('Cancelando tarefa 1...')
//},20000)

//---------------------------------------------------------------------------

//Temporizador para criar tarefas agendadas
//FORMA 2

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(6, 0)] //dias 6 e 0 (sábado e domingo)
regra.hour = 11
regra.second = 00

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2: ', new Date().getHours() + ':' +
    new Date().getMinutes() + ':' +
    new Date().getSeconds())
})