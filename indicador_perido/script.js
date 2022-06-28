function carregar(){
var msg = window.document.getElementById('msg')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `São ${hora} Horas`

if (hora >= 4 && hora < 12){
    bom.innerHTML = ("Bom dia!!")
    document.body.style.background = 'yellow'
    img.src="manha.png"

} else if( hora > 11 && hora <= 18 ){
    bom.innerHTML = ("Boa tarde!!")
    document.body.style.background = 'orange'
    img.src="tarde.png"
    
} else {
    bom.innerHTML = ("Boa noite!")
    document.body.style.background = 'black'
    img.src="noite.png"
}
}
