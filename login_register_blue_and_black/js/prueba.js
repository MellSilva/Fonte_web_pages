document.getElementById("bt_ayuda").addEventListener("click",abrirAyuda);
document.getElementById("bt_cerrar").addEventListener("click",cerrarAyuda);
document.getElementById("bt_iniciar_seccion").addEventListener("click",iniciarSeccion);
document.getElementById("bt_registrarse").addEventListener("click",register);
window.addEventListener("resize",anchoPage)

//declaracion de variables
var contenedor_login_register=document.querySelector(".contenedor_login_register");
var formulario_login=document.querySelector(".formulario_login");
var formulario_register=document.querySelector(".formulario_register");
var caja_tracera_login=document.querySelector(".caja_tracera_login");
var caja_tracera_registrar=document.querySelector(".caja_tracera_registrar");
var error_login_register = document.querySelector(".error_login_register");
var contenedor__todo = document.querySelector(".contenedor__todo");


function abrirAyuda (){
    error_login_register.style.display = "block";
    contenedor__todo.style.opacity = "0";
}

function cerrarAyuda(){
    error_login_register.style.display = "none";
    contenedor__todo.style.opacity = "1";
}

function anchoPage(){
    if (window.innerWidth > 800){
        caja_tracera_login.style.display = "block";
        caja_tracera_registrar.style.display ="block";

    }
    else{
        caja_tracera_registrar.style.display = "block";
        caja_tracera_registrar.style.opacity = "1";
        caja_tracera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}
 
anchoPage();
function iniciarSeccion(){
    if( window.innerWidth > 800){
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_tracera_registrar.style.opacity = "1";
        caja_tracera_login.style.opacity = "0";
        

    }
    else{
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_tracera_registrar.style.opacity = "1";
        caja_tracera_login.style.opacity = "0";
        caja_tracera_registrar.style.display= "block";
        caja_tracera_login.style.display = "none";
        contenedor_login_register.style.left = "-80px";
        contenedor_login_register.style.marginTop ="-80px";
    }
    
}

function register(){
    if( window.innerWidth > 800){
        formulario_login.style.display = "none";
        contenedor_login_register.style.left = "410px";
        formulario_register.style.display = "block";
        caja_tracera_registrar.style.opacity = "0";
        caja_tracera_login.style.opacity = "1";

    }
    else{
        formulario_login.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "block";
        caja_tracera_registrar.style.opacity = "0";
        caja_tracera_login.style.opacity = "1";
        caja_tracera_registrar.style.display= "none";
        caja_tracera_login.style.display = "block";
        contenedor_login_register.style.left = "15px";
        contenedor_login_register.style.marginTop ="-80px";
    }
   
}

