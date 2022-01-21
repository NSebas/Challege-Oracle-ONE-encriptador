/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
function noRefresh () {
    event.preventDefault();
}

function pasarTexto() {

   var texto = encriptarFrase();
   document.getElementById("msg").value = texto;
   noRefresh();
   return texto;

}

function encriptarFrase() {
   noRefresh();
   var mensaje = document.getElementById("input-texto").value;
   var msgEncrip = "";
   for (var i = 0; i < mensaje.length; i++) {
       switch (mensaje[i]) {
           case "a":
               msgEncrip += "ai";
               break;
           case "e":
               msgEncrip += "enter";
               break;
           case "i":
               msgEncrip += "imes";
               break;
           case "o":
               msgEncrip += "ober";
               break;
           case "u":
               msgEncrip += "ufat";
               break;
           default:
               msgEncrip += mensaje[i];
       }
   }
   return msgEncrip;
}

function copiarTexto() {

   var contenido = document.getElementById('msg');
   contenido.select();
   document.execCommand('copy');
   entrada.value = "";

}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function desencriptar(){
   var texto = inversa();
   document.getElementById('msg').value = texto;
   noRefresh();
   return texto;
}

function inversa(){
   noRefresh();
   var mensaje = document.getElementById('input-texto').value;
   var msgEncrip = "";
   msgEncrip = mensaje.replaceAll("ai","a");
   msgEncrip = msgEncrip.replaceAll("enter","e");
   msgEncrip = msgEncrip.replaceAll("imes","i");
   msgEncrip = msgEncrip.replaceAll("ober","o");
   msgEncrip = msgEncrip.replaceAll("ufat","u");
   return msgEncrip;
}