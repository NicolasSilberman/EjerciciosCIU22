function buscarSerie() {
    const unaSerie = document.getElementById("buscada").value;
    const serieBusqueda = document.getElementsByClassName("titulo");
    const selector = document.querySelectorAll('input[type=checkbox]');

    for (let i = 0; i < serieBusqueda.length; i++) {
        if (unaSerie.toLowerCase() == serieBusqueda[i].innerHTML.toLowerCase()) {
            selector[i].checked = 1;
        }
        else {
           selector[i].checked = 0;
        }
    }
}

function sumadorVistas() {
    let checks = document.querySelectorAll('input[type=checkbox]')
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked){
            var vistas = document.getElementsByClassName("temporadasVistas")
            var cantidadTemporadas = document.getElementsByClassName("temporadasTotales")
            if (vistas[i].innerHTML < cantidadTemporadas[i].innerHTML) {
                vistas[i].innerHTML = parseInt(vistas[i].innerHTML) + parseInt(1)
                calculaPorcentaje()
            }
        }
    }
}

function restadorVistas() {
    let checks = document.querySelectorAll('input[type=checkbox]')
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked){
            var vistas = document.getElementsByClassName("temporadasVistas")
            if (vistas[i].innerHTML > 0) {
                vistas[i].innerHTML = parseInt(vistas[i].innerHTML) - parseInt(1)
                calculaPorcentaje()
            }
        }
    }
}

function calculaPorcentaje() {
    const celdaT = document.getElementsByClassName('temporadasTotales');
    const celdaV = document.getElementsByClassName('temporadasVistas');
    const celdaP = document.getElementsByClassName('porcentualVisto');
    
    var calculo = 0

    for (let i = 0; i < celdaP.length; i++) {
        calculo = (celdaV[i].innerHTML/celdaT[i].innerHTML) * 100;
        celdaP[i].innerHTML = Math.trunc(calculo) + "%"
    }
}

window.onload = calculaPorcentaje;