function addClassDetales() {
    let divElemento = document.querySelector(".elemento")
    divElemento.classList.add("detales")
    adicionainformacoes()

    if (!divElemento.classList.contains("detales")) {
        let divElemento = document.querySelector(".elemento")
        divElemento.classList.add("detales")
        adicionainformacoes()
    }
}

function adicionainformacoes() {
    const nomeElemento = document.createElement("div")
        nomeElemento.classList.add("nomeElemento")
        nomeElemento.innerHTML = "<h2>Hidrogênio</h2>"

        const dados = document.createElement("div")
        dados.classList.add("dados")
        dados.innerHTML = `
            <p>Massa atômica: 1,008u</p>
            <p>Configuração Eletrônica: 1s²</p>
        `

        divElemento.appendChild(nomeElemento)
        divElemento.appendChild(dados)
}

function removeClassDetales() {
    let divElemento = document.querySelector(".elemento")
    divElemento.classList.remove("detales")
}