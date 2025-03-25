document.addEventListener('DOMContentLoaded', function(){
const aumentarFonteBotao = document.getElementByld('aumentar-fonte');
const diminuirFonteBotao = document.getElementByld('diminuir-fonte');

let tamanhoAtualFonte = 1;

aumentarFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})
diminuirFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})

})

