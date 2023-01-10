const inputTexto = document.querySelector(".inputtexto");
const inputEncriptado = document.querySelector(".inputencriptado");

const botonEncriptar = document.querySelector(".botonencriptar");
const botonDesencriptar = document.querySelector(".botondesencriptar");
const botonCopiar = document.querySelector(".botoncopiar");

function analizarMensaje(){
  var mensaje = inputTexto.value;
  var caracteres = "abcdefghijklmnñopqrstuvwxyz";
  var mensajeErroneo= "";
  var validador = false;

  for(var caracter of mensaje){
    if(!caracteres.includes(caracter)){
      mensajeErroneo += `<p class="parrafoerror"> El caracter ${caracter} no es válido'`
    }
  }

  if (mensajeErroneo.length == 0){
    validador = true;
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

