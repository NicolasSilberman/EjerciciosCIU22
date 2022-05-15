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

function calcularPorcentaje() {

}

calcularPorcentaje();
