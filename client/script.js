


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
//----------------------------------se hace post del formulario
    let formu= $(".form")
    console.log(formu)
    
   $(".btn-submit").click(function(e){
    e.preventDefault()
    alert($(".nombre")[0].value)
    let name = $(".nombre")[0].value
    let email = $("#email")[0].value
    let description = $("#mensaje-contact")[0].value
    let payload = {
        name:name,
        email:email,
        description:description
    }
    
    console.log(payload)
    let url = "http://localhost:3001/api/contact"

    fetch(url,{
        method: "POST",
        body: JSON.stringify(payload),
        headers:{
            "content-type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch((error=>console.log(error)))
 
   })

 