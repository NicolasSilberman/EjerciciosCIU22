function buscarSerie() {
    const unaSerie = document.getElementById("buscada").value;
    const serieBusqueda = document.getElementsByClassName("titulo");
    const selector = document.querySelectorAll('input[type=checkbox]');

    for (let i = 0; i < serieBusqueda.length; i++) {
        const titulo = serieBusqueda[i]
        if (unaSerie.toLowerCase() == titulo.innerHTML.toLowerCase()) {
            selector[i].checked = 1;
            titulo.style.backgroundColor = "blue"
            titulo.style.color = "white"
        }
        else {
            selector[i].checked = 0;
            titulo.style.backgroundColor = "d1e7dd"
            titulo.style.color = "black"
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

function crearSerie() {
    const nombreSerie = document.getElementById('nombreNueva').value;
    const cantidadTemporadas = document.getElementById('temporadasNueva').value;

    let tblDatos = document.getElementById('idDeTabla').insertRow(-1);
    let colC = tblDatos.insertCell(0)
    let colN = tblDatos.insertCell(1)
    let colT = tblDatos.insertCell(2)
    let colV = tblDatos.insertCell(3)
    let colP = tblDatos.insertCell(4)

    colC.innerHTML = '<input class="form-check-input" type="checkbox">';
    colN.innerHTML = nombreSerie;
    colT.innerHTML = cantidadTemporadas;
    colV.innerHTML = 0; 
    colP.innerHTML = 0 +"%";

    colN.classList.add("titulo");
    colT.classList.add("temporadasTotales");
    colV.classList.add("temporadasVistas");
    colP.classList.add("porcentualVisto");
}

//Falta editar. AGREGAR CHEQUEO NUMERO NATURAL EN TEMPORADAS, REVISAR SUMADOR