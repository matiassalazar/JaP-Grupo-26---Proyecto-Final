$(document).ready(function(){ 
    var endpoint_discos = "http://localhost:3000/discos";
    $.ajax({
        type: "GET",
        url: endpoint_discos,
        success: procesar_discos
    });
    function procesar_discos(datos) {
        datos.forEach(crear_articulo, this);
    }
    function crear_articulo(disco) {
        var $article = $("<article>");
        $article.addClass("card");
        var $imagen = $("<img>").appendTo($article);
        var $nombre = $("<h2>").appendTo($article);
        var $discos = $("section#discos");
        var $comprar = $("<button>").text("comprar $"+disco.precio).appendTo($article);
        $comprar.attr("data-id",disco.id);
        $imagen.attr("src", "musica/"+disco.coverimg);
        $nombre.text(disco.nombre);
        $discos.append($article);
        $comprar.on("click",comprar);

        function comprar(e){
            console.log("Compraste el disco con id "+$(this).attr('data-id'));
        }
        function AgregarAlCarrito(id){

        }
        function SacarDelCarrito(id){

        }
    }
});