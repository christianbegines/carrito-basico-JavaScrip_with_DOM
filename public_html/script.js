function cargarEnCarro(elemento){
   var div=document.getElementById(elemento);
   var parrafo=div.getElementsByTagName("p")[0];
   var nodoTexto=parrafo.firstChild();
   var texto=nodoTexto.nodeValue();
   alert(texto);

}
