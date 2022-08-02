
function seleccionarMascotaJugador(){
    //aca queremos que aparezca una alerta informando la mascota que se selecciono
    if (document.getElementById("Hipodoge").checked){ //aca dice que si el input que tiene el id Hipodoge es true, se ejecute el codigo
        document.getElementById("mascota-jugador").innerHTML="Hipodoge"//aca estoy cambiando el nombre de la mascota en pantalla
    }else if (document.getElementById("Capipepo").checked){
        document.getElementById("mascota-jugador").innerHTML="Capipepo"
    }else if (document.getElementById("Ratigueya").checked){
        document.getElementById("mascota-jugador").innerHTML="Ratigueya"
    }else{
        alert("Selecciona una mascota")
    }
    seleccionarMascotaEnemigo(1,3)//aca estamos invocando la funcion seleccionarMascotaEnemigo (la invocamos aca puesto que queremos que el
                                // enemigo eliga su mascota despues del jugador)
}
function seleccionarMascotaEnemigo(min,max){
    let ataqueAleatorio=Math.floor(Math.random()*(max-min+1)+min)
    if (ataqueAleatorio==1){
        document.getElementById("mascota-enemigo").innerHTML="Hipodoge"
    }else if (ataqueAleatorio==2){
        document.getElementById("mascota-enemigo").innerHTML="Capipepo"
    }else{
        document.getElementById("mascota-enemigo").innerHTML="Ratigueya"
    }
}
function ataqueFuego(){
    ataqueJugador="FUEGO" //aca estamos cambiando la variable global ataqueJugador
    ataquesEnemigoAleatorio(1,3)//aca estamos invocando a la funcion ataquesEnemigoAleatorio (la invoacmos aca porque queremos que al enemigo
                                //se le asigne un poder despues de la seleccion del jugador)
}
function ataqueAgua(){
    ataqueJugador="AGUA"
    ataquesEnemigoAleatorio(1,3)
}
function ataqueTierra(){
    ataqueJugador="TIERRA"
    ataquesEnemigoAleatorio(1,3)
}
function crearMensaje(){
    let seccionMensajes=document.getElementById("Mensajes")//aca estamos seleccionando la seccion mensaje del HTML
    let parrafo=document.createElement("p")//aca estamos creando un parrafo
    parrafo.innerHTML="tu mascota ataco con "+ataqueJugador+", la mascota del enemigo ataco con "+ataqueEnemigo+" el resultado es..."//aca le estamos diciendo que queremos que diga
    seccionMensajes.appendChild(parrafo)//aca estamos agregando a la seccion seleccionada mas arriba, el parrafo que creamos
}

function ataquesEnemigoAleatorio(min,max){
    let ataqueEnemigoAleatorio=Math.floor(Math.random()*(max-min+1)+min)
    if (ataqueEnemigoAleatorio==1){
        ataqueEnemigo="FUEGO"
    }else if (ataqueEnemigoAleatorio==2){
        ataqueEnemigo="AGUA"
    }else{
        ataqueEnemigo="TIERRA"
    }
    crearMensaje()//invocamos esta funcion aca porque si llegamos hasta aca es porque ya se selecciono el poder del jugador y del enemigo
}




let botonMascotaJugador = document.getElementById("boton-mascota") //esto selecciona un elemento de html desde javascript. Esto escucha el boton de mascotas 
botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)//esto hace que al hacer click en el boton, se ejeute la funcion seleccionarMarcotaJugador
let ataqueJugador  //esta es una variable que la vamos a cambiar con las funciones del ataque del usuario. Va a termiar teniendo el valor del poder que se selecciono
let ataqueEnemigo //esta es una variable que la vamos a cambiar con la funcion de ataquesEnemigoAleatorios. Va a termiar teniendo el valor del poder que toco
let botonFuego = document.getElementById("boton-fuego") 
botonFuego.addEventListener("click", ataqueFuego)
let botonAgua = document.getElementById("boton-agua") 
botonAgua.addEventListener("click", ataqueAgua)
let botonTierra= document.getElementById("boton-tierra")
botonTierra.addEventListener("click", ataqueTierra)



