const areaTexto = document.querySelector(".areatexto");
const areaEncriptado = document.querySelector(".areaencriptado");

const botonEncriptar = document.querySelector(".botonencriptar");
const botonDesencriptar = document.querySelector(".botondesencriptar");
const botonCopiar = document.querySelector(".botoncopiar");

const imgBuscando = document.getElementById("imgbuscando");
const msgNoHayTexto = document.getElementById("msgnohaytexto");

function analizarMensaje(){
  var mensaje1 = areaTexto.value;
  var mensaje2 = areaEncriptado.value;
  var caracteres = "abcdefghijklmnñopqrstuvwxyz ";
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
    alert("Ingrese carácteres válidos por favor");
  }

  return validador;
}

function encriptar(){
  if(analizarMensaje() == false) return;

  var mensaje = areaTexto.value;
  var mensajeEncriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

  areaEncriptado.style.display = "block";
  botonCopiar.style.display = "block";

  imgBuscando.hidden = true;  
  msgNoHayTexto.hidden = true;  

  areaEncriptado.value = mensajeEncriptado;
}

function desencriptar(){
  if(analizarMensaje() == false) return;

  var mensajeEncriptado = areaTexto.value;
  var mensajeDesencriptado = mensajeEncriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

  areaEncriptado.style.display = "block";
  botonCopiar.style.display = "block";

  imgBuscando.hidden = true;  
  msgNoHayTexto.hidden = true;  
  
  areaEncriptado.value = mensajeDesencriptado;
}

function copiar(){
  var mensajeEncriptado = areaEncriptado.value;
  
  navigator.clipboard.writeText(mensajeEncriptado);
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
