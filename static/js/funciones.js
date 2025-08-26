export function sumar(n1,n2){
    console.log(n1+n2)
}


let datosUsuario = document.querySelector(".textForm")
console.log(datosUsuario.classList)

let tituloHome = document.querySelector(".titulos")
tituloHome.addEventListener('mouseenter',function(){
    tituloHome.textContent ="Hiciste Click "
})
tituloHome.addEventListener('mouseleave', function(){
    tituloHome.textContent ="Bienvenido"
})