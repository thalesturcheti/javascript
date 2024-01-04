let num = [5,8,2,9,3]
num.push(1) //adiciona um valor no último elemento
num.sort()//coloca os valores em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)//length mostra o comprimento do array/vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1 ){
    console.log('O valor não foi encontrado!')
    
} else {
    console.log(`o valor 8 está na posição ${pos}`)
}
