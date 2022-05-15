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
            if (vistas[i].innerHTML < parseInt(cantidadTemporadas[i].innerHTML)) {
                vistas[i].innerHTML = parseInt(vistas[i].innerHTML) + 1
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
                vistas[i].innerHTML = parseInt(vistas[i].innerHTML) - 1
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

    if(validarCargas(nombreSerie) && validarCargas(cantidadTemporadas)) {
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
    else {
        alert("Complete todos los datos !")
    }
    
}

function editarSerie() {
    let checks = document.querySelectorAll('input[type=checkbox]')

    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            var titulo = document.getElementsByClassName("titulo")
            var vistas = document.getElementsByClassName("temporadasVistas")
            var cantidadTemporadas = document.getElementsByClassName("temporadasTotales")
            var nombreNuevo = document.getElementById("nombreEdit").value
            var vistasNuevas = document.getElementById("vistasEdit").value
            var temporadasNuevas = document.getElementById("temporadaEdit").value
            
            if(validarCargas(nombreNuevo)) {
                titulo[i].innerHTML = nombreNuevo
            }
            if(validarCargas(vistasNuevas) && validarCargas(temporadasNuevas)) {
                if(validaTamaños(parseInt(temporadasNuevas),parseInt(vistasNuevas))) {
                    vistas[i].innerHTML = parseInt(vistasNuevas)
                    cantidadTemporadas[i].innerHTML = parseInt(temporadasNuevas)
                }
                else {
                    alert("Las vistas no pueden ser mayor al total !")
                }
            }
            else if(validarCargas(temporadasNuevas)) {
                if(validaTamaños(parseInt(temporadasNuevas),vistas[i].innerHTML)) {
                    cantidadTemporadas[i].innerHTML = parseInt(temporadasNuevas)
                }
                else {
                    alert("Las vistas no pueden ser mayor al total !")
                }
            }
            else if(validarCargas(vistasNuevas)) {
                if(validaTamaños(cantidadTemporadas[i].innerHTML,parseInt(vistasNuevas))) {
                    vistas[i].innerHTML = parseInt(vistasNuevas)
                }
                else {
                    alert("Las vistas no pueden ser mayor al total !")
                }
            }
        calculaPorcentaje();   
        }
    }
}

function validarCargas(dato) {
    return dato != ''

}

function validaTamaños(a,b) {
    return a >= b;
}

function validaNatural(evento){
    var numero = (evento.which) ? evento.which : evento.keyCode;
    resultado = 0
    if(numero>=48 && numero<=57) {
      resultado = true;
    } else
    {
        alert("Debe ingresar un numero natural !");
        resultado = false 
    }
    return resultado
}
