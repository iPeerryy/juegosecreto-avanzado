

let numeroAleatorio= 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
titulo.innerHTML = texto;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    document.getElementById("reiniciar").removeAttribute('disabled');
   


    if (numeroDeUsuario === numeroAleatorio){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1)?  'intento' : 'intentos'}`)}
        else{
            // el usuario no acerto
                if (numeroDeUsuario > numeroAleatorio){
                asignarTextoElemento('p','El numero es menor');

                } 
            else { 
                asignarTextoElemento('p','El numero es mayor');''

            }
        
        intentos++;
        limpiarCaja();
        } 
    return;

    }
function limpiarCaja(){

let valorCaja = document.getElementById('valorUsuario').value='';
}


function generarCodigoAleatorio() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   
//Si ya mostramos todos los numeros en pantalla
console.log(numeroGenerado);
console.log(listaNumerosSorteados);

if(listaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')

}else{

    // Si el numero generado esta incluido en la lista, hacemos una lista, sino, no 

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarCodigoAleatorio();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Ingrese numero del 1 al ${numeroMaximo}`);
    numeroAleatorio=generarCodigoAleatorio();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar caja.
    limpiarCaja();
    //Indicar mensajes de texto de intervalo de numeros
    condicionesIniciales();
    // deshabilitar reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
  

}

condicionesIniciales();