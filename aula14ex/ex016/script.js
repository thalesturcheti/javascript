function contar(){
    let ini = document.getElementById('txti')//let é uma variável assim como var
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar :('
        //window.alert('[ERRO]Faltam dados!')
    } else{
        res.innerHTML = 'Contando: <br>' // br vai fazer quebrar a linha e continuar na de baixo
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){ //se colocar 0 vai aparecer um alerta e vai considerar o passo 1
            window.alert('Passo inválido! Considerando PASSO 1')
            p=1 // pq aqui está o passo 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c+= p) {
              res.innerHTML += ` ${c} \u{1F449} `//colocar emoji, só funciona entre crases
            }
              } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }res.innerHTML += `\u{1F3C1} `
    }
}