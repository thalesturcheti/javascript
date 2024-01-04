function verificar(){
    var data = new Date() //para inserir a data atual
    var ano = data.getFullYear() //mostra o ano com os 4 digitos
    var fano = document.getElementById('txtano') //é o ano para selecionar na aba
    var res = document.querySelector('div#res') //é onde vai aparecer o resultado
    if (fano.value.lenght == 0|| fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//p conseguir marcar opcao
        var idade = ano - fano.value //calcula o ano que coloca na aba
        var gênero = '' //vai mostrar se é homem ou mulher
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')//carrega a foto direto no j.s
        if (fsex[0].checked) { //se marcar masculino aparece homem
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){ //idade maior igual 0 e menor que 10
                //Criança
                img.setAttribute('src' , 'bebehomem.png')
            } else if ( idade < 21){ //se menor que 21
                //Jovem
                img.setAttribute('src' , 'jovemhomem.png')
            }else if (idade < 50){ //se menor que 50
                //Adulto
                img.setAttribute('src' , 'adultohomem.png')
            }else { //pra cima de 50
                //Idoso
                img.setAttribute('src' , 'idosohomem.png')
            }  

        } else if (fsex[1].checked) { //se marcar feminino aparece mulher
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src' , 'bebemenina.png')
            } else if ( idade < 21){
                //Jovem
                img.setAttribute('src' , 'jovemmenina.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src' , 'adultomulher.png')
            }else {
                //Idoso
                img.setAttribute('src' , 'idosomulher.png')
            }  
        }
        res.style.textAlign = 'center' //centraliza o texto do resultado
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //para executar o comando de mostrar a foto
    }

}