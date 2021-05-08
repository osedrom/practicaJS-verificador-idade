function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
}     else{
    var fsex =document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero =""
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
        genero='Homen'
        if(idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src','img2/nino.png')
        }else if(idade < 21){
            //Joven
            img.setAttribute('src','img2/joven1.png')
        }else if(idade< 50){
            //Adulto
            img.setAttribute('src','img2/adulto.png')
        }else {
            //Idoso
            img.setAttribute('src','img2/anciano.png')
        }
    }else if(fsex[1].checked){
        genero= 'Mulher'
        if(idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src','img2/nina.png')
        }else if(idade < 21){
            //Joven
            img.setAttribute('src', 'img2/mujerjo.png')
        }else if(idade< 55){
            //Adulto
            img.setAttribute('src','img2/adulta.png')

        }else {
            //Idoso
            img.setAttribute('src',"img2/anciana.png")
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
}
}

  

   




