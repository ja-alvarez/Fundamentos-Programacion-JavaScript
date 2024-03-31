$(function () {

    $("#searchSuperHero").on("submit", function (event) {
        event.preventDefault();
        //Se valida que se ingrese un número entre 1 y 732
        const regexVal = /^[0-9]+$/

        let id = $("#searchHero").val();

        if (regexVal.test(id) && id != 0 && id < 733) {
            getHero(id);

        } else {
            return alert("El formato de id no es válido. \nIngrese un número entre 1 y 732.");
        }
    })

    function getHero(id) {
        console.log(`hola ${id}`);
        let urlBase = "https://www.superheroapi.com/api.php/4905856019427443/" + id;
        $.ajax({
            method: "GET",
            url: urlBase,
            dataType: "json",
        }).done(function (response) {
            let hero = {
                id: response.id,
                imagen: response["image"]["url"], // ?? "Sin información"
                nombre: response["name"],
                conexiones: response["connections"]["group-affiliation"],
                publicado: response["biography"]["publisher"],
                ocupacion: response["work"]["occupation"],
                primeraAparicion: response["biography"]["first-appearance"],
                altura: response["appearance"]["height"],
                peso: response["appearance"]["weight"],
                alias: response["biography"]["aliases"]
            }
            loadCardHero(hero);  
        }).fail(function() {
            alert("Error al procesar al Héroe, verificar información ingresada.");
        })
    };

    console.log(Hero(hero[213]));

    function loadCardHero(hero){
        $("#cardHero-imagen").attr("src", hero.imagen);
        $("#cardHero-nombre").text(`Nombre: ${hero.nombre}`);
        $("#cardHero-conexiones").text(`Conexiones: ${hero.conexiones}.`);
        $("#cardHero-publicado").text(`Publicado: ${hero.publicado}`);
        $("#cardHero-ocupacion").text(`Ocupación: ${hero.ocupacion}.`);
        $("#cardHero-primeraAparicion").text(`Primera Aparición: ${hero.primeraAparicion}.`);
        $("#cardHero-altura").text(`Altura: ${hero.altura.join(" - ")}`);  //hero.altura.join(" - ")
        $("#cardHero-peso").text(`Peso: ${hero.peso.join(" - ")}`);
        $("#cardHero-alias").text(`Alias: ${hero.alias.join(", ")}.`);
    }



// ********** FALTA ESTA PARTE **************************
    /* Modal */
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});