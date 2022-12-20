function seleccionar(link) {
    console.log(link)
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";
    console.log(opciones)
    

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("navbar");
    x.className = "";
}
