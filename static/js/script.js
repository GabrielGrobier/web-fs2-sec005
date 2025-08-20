
//let usuario = document.getElementById("UserLabel").value
//console.log(usuario)

//   and == &&
// OR == || 

let datoUsuarioAdmin ={
    "nombreCompleto":"Gabriel Grobier",
    "usuario":"gabo",
    "password":"gabo123ñ",
    "estado":true
}

window.onload = function(){
    if (window.location.pathname.endsWith("home.html")){
        let usuariologin = JSON.parse(localStorage.getItem("datosUsuario"))
        if(usuariologin.estadoLogin){
            document.getElementById("tituloHome").textContent = "Bienvenido " + usuariologin.nombre

        }
    }
}

function datosUsuario(){
    let usuario = document.getElementById("UserLabel").value
    let password = document.getElementById("inputPassword6").value

    if (usuario == ""||password == "" ){
        alert("debe llenar todos los campos")
    }
    else if(usuario.length <3 || password.length <3 ){
        alert("los campos deben ser mayor a 3 ")
    }
    else if(usuario == datoUsuarioAdmin.usuario && password == datoUsuarioAdmin.password){
        let usuarioLogeado= {
            "nombre":datoUsuarioAdmin.nombreCompleto,
            "estadoLogin":datoUsuarioAdmin.estado
        }
        localStorage.setItem("datosUsuario",JSON.stringify(usuarioLogeado))
        window.location.href="home.html"
    }

}