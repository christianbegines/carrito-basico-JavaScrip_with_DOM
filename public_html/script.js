function cargarEnCarro(elemento){
    
    alert(elemento);
    
    var div=document.getElementById(elemento);
    alert(div.getElementsByTagName("p")[0].firstChild.nodeValue);
  
       
   
   var texto=div.getElementsByTagName("p")[0].firstChild.nodeValue;
   var parrafoNuevo= document.createElement("p");
   
   var nodoTextoNuevo=document.createTextNode(texto);
   parrafoNuevo.appendChild(nodoTextoNuevo);
   document.getElementById("precios").appendChild(parrafoNuevo);

}
