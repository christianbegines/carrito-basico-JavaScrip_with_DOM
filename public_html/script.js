
function cargarEnCarro(elemento) {
    var div = document.getElementById(elemento);
    var texto = div.getElementsByTagName("p")[0].firstChild.nodeValue;
    var tipoProducto = "";
    var precio = parseInt(texto.toString().split(" ")[1]);
    
    var srcImagen = div.getElementsByTagName("img")[0].getAttribute("src");
    var img = document.createElement("img");
    var botonRestar = document.createElement("button");
    var botonBorrar = document.createElement("button");
    img.setAttribute("src", srcImagen);
    
    var nodoTextoPrecio = document.createTextNode(texto);
    var nodoTextoRestar = document.createTextNode("Restar");
    var nodoTextoBorrar = document.createTextNode("Borrar");
    var nodoTextoUnidad = document.createTextNode("Unidades:1");
   
    botonRestar.appendChild(nodoTextoRestar);
    botonRestar.setAttribute("onclick", "restar()");
    botonBorrar.appendChild(nodoTextoBorrar);
    botonBorrar.setAttribute("onclick", "borrarArticulo()");
  
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var precioTotal=0;
    var nodoPrecioTotal=document.createTextNode("PrecioTotal:"+precio);
    var inCart = document.getElementById("c" + div.id);

    if (inCart !== null) {
        //
       
        var segundoHijoF = inCart.lastChild.previousSibling;
        var tercerHijoF = segundoHijoF.previousSibling;
        var textoUnidadRecogido = tercerHijoF.previousSibling;
        
        var unidades = parseInt(textoUnidadRecogido.nodeValue.split(":")[1]);
        
        unidades++;
        precioTotal=precio*unidades;
        
        var nodoUnidades = document.createTextNode("Unidades:" + unidades);
        var nodoPrecioTotalC = document.createTextNode("PrecioTotal:" + precioTotal);
        inCart.replaceChild(nodoUnidades,textoUnidadRecogido);
        var nodoBoton = inCart.lastChild.previousSibiling;
        console.log(nodoBoton);
        var nodoPrecioT=nodoBoton.previousSibling;
        inCart.insertBefore(nodoPrecioTotalC,nodoPrecioT);
        
    } else {
        var divArticulo = document.createElement("div");
        divArticulo.setAttribute("class", "articulo_carro");
        divArticulo.setAttribute("id", "c" + div.id);
        divArticulo.appendChild(img);
        divArticulo.appendChild(br);
        divArticulo.appendChild(nodoTextoPrecio);
        divArticulo.appendChild(br2);
        divArticulo.appendChild(nodoTextoUnidad);
        divArticulo.appendChild(br3);
        divArticulo.appendChild(nodoPrecioTotal);
        divArticulo.appendChild(br4);
        divArticulo.appendChild(botonRestar);
        divArticulo.appendChild(botonBorrar);


        document.getElementById("precios").appendChild(divArticulo);
    }
    
    function borrarArticulo(){
        
    }

}
