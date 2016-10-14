
function cargarEnCarro(elemento) {
    var div = document.getElementById(elemento);
    var texto = div.getElementsByTagName("p")[0].firstChild.nodeValue;
    var tipoProducto = "";
    var precio = texto.toString().split(" ");
    var srcImagen = div.getElementsByTagName("img")[0].getAttribute("src");
    var img = document.createElement("img");
    var botonRestar = document.createElement("button");
    var botonBorrar = document.createElement("button");
    img.setAttribute("src", srcImagen);
    var parrafoNuevo = document.createElement("p");
    var nodoTextoPrecio = document.createTextNode(texto);
    var nodoTextoRestar = document.createTextNode("Restar");
    var nodoTextoBorrar = document.createTextNode("Borrar");
    var nodoTextoUnidad = document.createTextNode("Unidades:1");
    botonRestar.appendChild(nodoTextoRestar);
    botonRestar.setAttribute("onclick", "restar()");
    botonBorrar.appendChild(nodoTextoBorrar);
    botonBorrar.setAttribute("onclick", "borrar()");
  
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    
    var inCart = document.getElementById("c" + div.id);

    if (inCart !== null) {
        //
        var segundoHijoF = inCart.lastChild.previousSibling;
        var tercerHijoF = segundoHijoF.previousSibling;
        var textoUnidadRecogido = tercerHijoF.previousSibling;
        
        var unidades = parseInt(textoUnidadRecogido.nodeValue.split(":")[1]);
        unidades++;
        var nodoUnidades = document.createTextNode("Unidades:" + unidades);
        inCart.replaceChild(nodoUnidades,textoUnidadRecogido);
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
        divArticulo.appendChild(botonRestar);
        divArticulo.appendChild(botonBorrar);


        document.getElementById("precios").appendChild(divArticulo);
    }

}
