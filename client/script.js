let menu = document.getElementById("links")
console.log(menu)
let toggle_open = document.getElementById("toggle_open")
let toggle_close = document.getElementById("toggle_close")

toggle_open.addEventListener("click",toggleMenu);
toggle_close.addEventListener("click",toggleMenu);

function toggleMenu(){
    console.log("desde menu")
    menu.classList.toggle("show-menu")
    if(menu.classList.contains("show-menu")){
        toggle_open.style.display = "none"
        toggle_close.style.display = "block"
    }else {
        toggle_open.style.display = "block"
        toggle_close.style.display = "none"
    }
}




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
    // let formu= $(".form")
    // console.log(formu)
    
//    $(".btn-submit").click(function(e){
//     e.preventDefault()

//     let btn = document.getElementById("btn")
//     let name = $(".nombre")[0].value
//     let email = $("#email")[0].value
//     let description = $("#mensaje-contact")[0].value
//     let payload = {
//         name:name,
//         email:email,
//         description:description
//     }
    
//     console.log(payload)
//     let url = "http://localhost:3001/api/contact"

//     fetch(url,{
//         method: "POST",
//         body: JSON.stringify(payload),
//         headers:{
//             "content-type": "application/json"
//         }
//     })
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch((error=>console.log(error)))


//     formu[0].reset()
 
//    })

   const nombre = document.getElementById("nombre")
   const correo = document.getElementById("email")
   const descripcion = document.getElementById("mensaje-contact")
   const formulario =  document.getElementById("formulario")
   const btn = document.getElementById("btn")
   const expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

   eventos() 
   function eventos(){  
    document.addEventListener("DOMContentLoaded", btnDisabled)

    correo.addEventListener("blur", formularioEnviar)
    nombre.addEventListener("blur", formularioEnviar)
    descripcion.addEventListener("blur", formularioEnviar)
    formulario.addEventListener("submit",enviarFormulario)
   }
   
   function btnDisabled(){
    btn.disabled = true
   }

   function formularioEnviar(e){
    console.log("desde formulario")
   
    if(e.target.value.length > 0){
         const error = document.querySelector("p.error")
         if(error){
        error.remove()
         }

      
    }else {
        e.target.classList.add("invalido")
        mensajeError("Todos los campos son obligatorios")
        
    }
    if(e.target.type === "email"){
        if(expresion.test(e.target.value)){
            const error = document.querySelector("p.error")
            if(error){
                error.remove()
            }

        }else {
            mensajeError("email no valido")
        }
        
    }
    if((correo.value !=="" && descripcion.value !== "" && nombre.value !== "")){
        btn.disabled = false
    }
    function mensajeError(mensaje){
        const errorMensaje = document.createElement("p")
        errorMensaje.textContent = mensaje
        errorMensaje.classList.add("errorMensaje","error")  

        const errores = document.querySelectorAll(".error")
        if(errores.length === 0) {
            formulario.appendChild(errorMensaje)
        }

       
    }
    
   }
   function enviarFormulario(e){
    e.preventDefault()
    
    console.log("enviado")
    

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

   

    setTimeout( ()=> {
        const mensaje = document.createElement("p")
        mensaje.textContent="se envio Datos con Exito!!"
        mensaje.classList.add("success")
        formulario.appendChild(mensaje)
        formulario.reset()

        setTimeout(()=>{
            mensaje.remove()
        },2000)

    },1200)
    
   }
 

 