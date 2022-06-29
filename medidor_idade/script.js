function verificar(){
    let data = new Date()
    let ano_atual = data.getFullYear()
    let f_ano = document.getElementById('ano')
    let res = document.getElementById('res') 


    if (f_ano.value.length == 0 || f_ano.value > ano_atual){ //Verifica se o ano é nulo ou maior que o ano atual
        alert(`Ano nulo ou maior que o atual`)
    }else{

    
        let fsex = document.getElementsByName('radsex')
        let idade = ano_atual - Number(f_ano.value)


        if(fsex[0].checked){
            if (idade >= 0 && idade <= 11){
                img.src = 'img/crianca_homem.jpg'
                res.innerHTML = `Menino de ${idade} anos` 
            }
            else if (idade >= 12 && idade <= 17){
                img.src = 'img/jovem_homem.jpg'
                res.innerHTML = `Adolescente homem de ${idade} anos`
            }
            else if (idade >= 18 && idade <= 60){
                img.src = 'img/adulto_homem.jpg'
                res.innerHTML = `Adulto de ${idade} anos`
            }
            else if (idade > 60 && idade <= 122){
                img.src = 'img/idoso_homem.jpg'
                res.innerHTML = `Idoso de ${idade} anos`
            }
            else{
                img.src = 'img/tartaruga.jpg'
                res.innerHTML = `Tartaruga de ${idade} anos`
            }
        }

        if(fsex[1].checked){
            if (idade >=0 && idade <= 11){
                img.src = 'img/crianca_mulher.jpg'
                res.innerHTML = `Menina de ${idade} anos`
            }
            else if (idade >= 12 && idade <=17){
                img.src = 'img/jovem_mulher.jpg'
                res.innerHTML = `Adolescente mulher de ${idade} anos`
            }
            else if (idade >= 18 && idade <= 60){
                img.src = 'img/adulto_mulher.jpg'
                res.innerHTML = `Adulta de ${idade} anos`
            }   
            else if (idade > 60 && idade <= 122){
                img.src = 'img/idoso_mulher.jpg'
                res.innerHTML = `Idosa de ${idade} anos`
            }
            else{
                img.src = 'img/tartaruga.jpg'
                res.innerHTML = `Tartaruga de ${idade} anos`
            }
        }
    }
}