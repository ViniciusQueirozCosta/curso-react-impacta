const mod1 = require('./modulo1') //Não precisa da extensão quando js
const mod2 = require('./modulo2')

mod1('Meu primeiro modulo')
mod2.mensagem('Meu segundo Modulo')

var v = 'variavel que existe no escopo global, acessivel a todos'
let l = 'variavel dentro de escopo, somente para aquele escopo'
const c = 'constante que existe dentro de um escopo'

const f = function(){
    v = 'alterado o v'
    let i
    for(i = 0; i < 5; i++){
        console.log(i)
    }

    console.log(i)
}
