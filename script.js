document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

// tratamento de elemento
document.querySelector("#qtd").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = "Prazo: "+ prazo + " semana"
    atualizarPreco()
})

function atualizarPreco(){
    const qtd = document.querySelector("#qtd").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtd * 100;
    let taxaUrgencia = 1 - prazo * .1;

    if(qtd > 10) qtd = 10
    if (qtd < 1) qtd = 1
    if (incluiLayout)  preco += 500;
    if (temJS) preco *= 1.1
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}
