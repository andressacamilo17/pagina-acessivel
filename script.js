document.addEventListener('DOMContentLoaded', function(){
const aumentaFonteBotao = document.getElementByld('aumentar-fonte')
const diminuiFonteBotao = document.getElementByld('diminuir-fonte')
let tamanhoAtualFonte= 1;
aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte + = 0,1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'
})
}

)