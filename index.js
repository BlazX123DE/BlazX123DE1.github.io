let valor = 0
function iniciarContador() {
    let spanValor = document.getElementById("valor-span")
    let buttonAumentar = document.getElementById("aumentar")
    buttonAumentar.onclick = function() {
        valor++;
        spanValor.innerHTML = valor;
    }
    let buttonDecrementar = document.getElementById("decrementar")
    buttonDecrementar.onclick = function() {
        valor--;
        spanValor.innerHTML = valor;
    }
    let buttonResetear = document.getElementById("resetear")
    buttonResetear.onclick = function() {
        valor = 0;
        spanValor.innerHTML = valor;
    }
}

window.addEventListener("load", iniciarContador)