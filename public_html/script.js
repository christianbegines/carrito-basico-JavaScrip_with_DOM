

function cargarEnCarro(elemento) {
    var div = document.getElementById(elemento);
    var texto = div.getElementsByTagName("p")[0].firstChild.nodeValue;
    var precio = parseInt(texto.toString().split(" ")[1]);
    var srcImagen = div.getElementsByTagName("img")[0].getAttribute("src");

    var img = document.createElement("img");
    img.setAttribute("src", srcImagen);

    var botonRestar = document.createElement("button");
    var botonBorrar = document.createElement("button");


    var nodoTextoPrecio = document.createTextNode(texto);
    var nodoTextoRestar = document.createTextNode("Restar");
    var nodoTextoBorrar = document.createTextNode("Borrar");
    var nodoTextoUnidad = document.createTextNode("Unidades:1");

    botonRestar.appendChild(nodoTextoRestar);
    botonRestar.setAttribute("onclick", "restarArticulo(this)");
    botonBorrar.appendChild(nodoTextoBorrar);
    botonBorrar.setAttribute("onclick", "borrarArticulo(this)");

    var br = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");

    var inCart = document.getElementById("c" + div.id);
    var unidades = 1;
    var precioTotal = precio * unidades;
    var nodoPrecioTotal = document.createTextNode("PrecioTotal:" + precioTotal);

    if (inCart !== null) {
        var segundoHijoF = inCart.lastChild.previousSibling;
        var tercerHijoF = segundoHijoF.previousSibling;
        var nodoPrecioAntes = tercerHijoF.previousSibling;
        var quintoH = nodoPrecioAntes.previousSibling;
        var textoUnidadRecogido = quintoH.previousSibling;

        unidades = parseInt(textoUnidadRecogido.nodeValue.split(":")[1]);
        unidades++;
        precioTotal = precio * unidades;

        var nodoUnidades = document.createTextNode("Unidades:" + unidades);
        nodoPrecioTotal = document.createTextNode("PrecioTotal:" + precioTotal);
        inCart.replaceChild(nodoUnidades, textoUnidadRecogido);
        inCart.replaceChild(nodoPrecioTotal, nodoPrecioAntes);


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
}


function borrarArticulo(nodo) {
    var nodoParent = nodo.parentNode;
    nodoParent.parentNode.removeChild(nodoParent);

}
function restarArticulo(nodo){
        var segundoHijoF = nodo.parentNode.lastChild.previousSibling;
        var tercerHijoF = segundoHijoF.previousSibling;
        var nodoPrecioAntes = tercerHijoF.previousSibling;
        var quintoH = nodoPrecioAntes.previousSibling;
        var textoUnidadRecogido = quintoH.previousSibling;
        var  unidades = parseInt(textoUnidadRecogido.nodeValue.split(":")[1]);
        if(unidades>1){
            unidades--;
            var nodoUnidadesRestado=document.createTextNode("Unidades:"+unidades);
            nodo.parentNode.replaceChild(nodoUnidadesRestado,textoUnidadRecogido);
        }else{
            borrarArticulo(nodo);
        }
        
        
}