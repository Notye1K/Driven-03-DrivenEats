function cliquep (x) {
    p = document.querySelector(".prato .contorno")
    if (p !== null) {
        p.classList.remove('contorno')
        p.classList.remove('escondido')
    }
    x.classList.add('contorno')
    x.classList.add('escondido')

    p = document.querySelector(".prato .contorno")

    if (p !== null && b !== null && s !== null) {
        f.classList.add('fechar')
        f.innerHTML = "Fechar pedido"
    }
}
function cliqueb (x) {
    b = document.querySelector(".bebi .contorno")
    if (b !== null) {
        b.classList.remove('contorno')
        b.classList.remove('escondido')
    }
    x.classList.add('contorno')
    x.classList.add('escondido')

    b = document.querySelector(".bebi .contorno")

    if (p !== null && b !== null && s !== null) {
        f.classList.add('fechar')
        f.innerHTML = "Fechar pedido"
    }
}
function cliques (x) {
    s = document.querySelector(".sobre .contorno")
    if (s !== null) {
        s.classList.remove('contorno')
        s.classList.remove('escondido')
    }
    x.classList.add('contorno')
    x.classList.add('escondido')

    s = document.querySelector(".sobre .contorno")

    if (p !== null && b !== null && s !== null) {
        f.classList.add('fechar')
        f.innerHTML = "Fechar pedido"
    }
}
function cancel () {
    gg.classList.add('sem')
}


let f = document.querySelector(".salchicha")
let p = document.querySelector(".prato .contorno")
let b = document.querySelector(".bebi .contorno")
let s = document.querySelector(".sobre .contorno")

const gg = document.querySelector('.sem')
        
function fechar (x) {
    if (x === document.querySelector('.fechar')) {
        
        const prato = document.querySelector('.prato .contorno h1').innerHTML
        const precoPrato = document.querySelector('.prato .contorno h3').innerHTML
        const precoPratoA = parseFloat(precoPrato.replace(',','.').replace('R$',""))
        const bebida = document.querySelector('.bebi .contorno h1').innerHTML
        const precoBebida = document.querySelector('.bebi .contorno h3').innerHTML
        const precoBebidaA = parseFloat(precoBebida.replace(',','.').replace('R$',""))
        const sobre = document.querySelector('.sobre .contorno h1').innerHTML
        const precoSobre = document.querySelector('.sobre .contorno h3').innerHTML
        const precoSobreA = parseFloat(precoSobre.replace(',','.').replace('R$',""))
        const total = precoPratoA + precoBebidaA + precoSobreA
       

        gg.classList.remove('sem')
        document.querySelector('.linha1 h1').innerHTML = prato
        document.querySelector('.linha1 h2').innerHTML = precoPrato
        document.querySelector('.linha2 h1').innerHTML = bebida
        document.querySelector('.linha2 h2').innerHTML = precoBebida
        document.querySelector('.linha3 h1').innerHTML = sobre
        document.querySelector('.linha3 h2').innerHTML = precoSobre
        document.querySelector('.linha4 h2').innerHTML = `R$ ${total.toFixed(2)}`

    }
}
function cemporcento(){
    const nome = prompt('Diga seu nome')
    const ende = prompt('Diga seu endereço')
    const prato = document.querySelector('.prato .contorno h1').innerHTML
    const precoPrato = document.querySelector('.prato .contorno h3').innerHTML
    const precoPratoA = parseFloat(precoPrato.replace(',','.').replace('R$',""))
    const bebida = document.querySelector('.bebi .contorno h1').innerHTML
    const precoBebida = document.querySelector('.bebi .contorno h3').innerHTML
    const precoBebidaA = parseFloat(precoBebida.replace(',','.').replace('R$',""))
    const sobre = document.querySelector('.sobre .contorno h1').innerHTML
    const precoSobre = document.querySelector('.sobre .contorno h3').innerHTML
    const precoSobreA = parseFloat(precoSobre.replace(',','.').replace('R$',""))
    const total = precoPratoA + precoBebidaA + precoSobreA
    const texto = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobre}\nTotal: R$ ${total.toFixed(2)}\n\nNome: ${nome}\nEndereço: ${ende}`
    const textoURL = encodeURIComponent(texto); 
    document.querySelector('.link').href=`https://wa.me/5571997256285?text=${textoURL}`

}