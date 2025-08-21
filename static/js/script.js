
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


function registroUsuario(){
    let nombreCompleto = document.getElementById("nombreCompleto").value
    let correoElectronico = document.getElementById("correoElectronico").value
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    // es una variable de estado (bandera)
    let existe = false
    //usuarios es un elemento del localStorage llamado usuarios , si no existe 
    //es un array vacio 
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    for (let i = 0 ;i < usuarios.length; i++){
        if(usuarios[i].correoElectronico === correoElectronico){
            existe = true
            break
        }
    }
    if (correoElectronico == "" || nombreCompleto == "" || password1 == "" || password2 == ""){
        alert("Todos los campos deben estan completados ")
    }
    else if (password1 != password2){
        alert("las contraseñas no coinciden ")

    }
    else if(existe){
        alert("El correo ya esta registrado")
    }
    else{
        usuarios.push({nombreCompleto,correoElectronico,password1})
        localStorage.setItem("usuarios",JSON.stringify(usuarios))

    }


}