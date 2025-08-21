function detalesSobreOElemento() {
    let divElemento = document.querySelector(".elemento")
    divElemento.classList.add("detales")

    elementos = document.querySelector(".elemento")

    elementos.innerHTML = ""
    elementos.innerHTML += `
    <div class="elemento ametais detales" id="H">
            <div class="numeroAtomico">
                <p>1</p>
            </div>
            <div class="simbuloAtomico">
                <h1>H</h1>
            </div>
            <div class="nomeElemento">
                <h2>Hidrogênio</h2>
            </div>
            <div class="dados">
                <p>Massa atômica: 1,008u</p>
                <p>Configuração Eletrônica: 1s²</p>
            </div>
        </div>
    `
}