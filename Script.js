const inputTexto = document.querySelector(".inputtexto");
const inputEncriptado = document.querySelector(".inputencriptado");

const botonEncriptar = document.querySelector(".botonencriptar");
const botonDesencriptar = document.querySelector(".botondesencriptar");
const botonCopiar = document.querySelector(".botoncopiar");

function analizarMensaje(){
  var mensaje1 = inputTexto.value;
  var mensaje2 = inputEncriptado.value;
  var caracteres = "abcdefghijklmnñopqrstuvwxyz";
  var mensajeErroneo1= "";
  var mensajeErroneo2= "";
  var validador = true;

  for(var caracter of mensaje1){
    if(!caracteres.includes(caracter)){
      mensajeErroneo1 = "ERROR"
    }
  }

  for(var caracter of mensaje2){
    if(!caracteres.includes(caracter)){
      mensajeErroneo2 = "ERROR"
    }
  }

  if (mensajeErroneo1 == "ERROR" || mensajeErroneo2 == "ERROR"){
    validador = false;
  }

  return validador;
}

function encriptar(){
  if(analizarMensaje() == false) return;

  var mensaje = inputTexto.value;
  var mensajeEncriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

  inputEncriptado.value = mensajeEncriptado;
}

function desencriptar(){
  if(analizarMensaje() == false) return;

  var mensajeEncriptado = inputEncriptado.value;
  var mensajeDesencriptado = mensajeEncriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

  inputTexto.value = mensajeDesencriptado;
}

function copiar(){
  var mensajeEncriptado = inputEncriptado.value;
  
  navigator.clipboard.writeText(mensajeEncriptado);
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

