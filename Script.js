
document.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDAcessibilidade= document.getElementById('opcoes-acessbilidade');
    
    botaoDeAcessibilidade.addEventListener('click', function(){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    })


    const aumentarFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    
    let tamanhoAtualFonte= 1;
    
    aumentarFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})

alternaContraste.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste')
})
})
