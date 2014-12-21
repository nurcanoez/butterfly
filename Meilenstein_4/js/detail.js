function fillTables(kindOfData) {
    var datenTabelle;
    switch (kindOfData) {
        case 'musicTable':
            document.getElementById("musicId").style.display = 'block';
            document.getElementById("filmId").style.display = 'none';
            datenTabelle = document.getElementById("datenMusic");
            for (var zeile = 0; zeile < datenTabelle.children.length; zeile++) {
                var trChildren = datenTabelle.children[zeile].children;
                trChildren[0].innerHTML = musicObject.music[zeile].interpreter;
                trChildren[1].innerHTML = musicObject.music[zeile].albumtitel;
                trChildren[2].innerHTML = musicObject.music[zeile].erscheinungsjahr;
                trChildren[3].innerHTML = musicObject.music[zeile].genre;
            }
            break;
        case 'filmTable':
            document.getElementById("musicId").style.display = 'none';
            document.getElementById("filmId").style.display = 'block';
            datenTabelle = document.getElementById("datenFilm");
            for (var zeile = 0; zeile < datenTabelle.children.length; zeile++) {
                var trChildren = datenTabelle.children[zeile].children;
                trChildren[0].innerHTML = filmObject.filme[zeile].filmtitel;
                trChildren[1].innerHTML = filmObject.filme[zeile].regie;
                trChildren[2].innerHTML = filmObject.filme[zeile].drehbuch;
                trChildren[3].innerHTML = filmObject.filme[zeile].erscheinungsjahr;
                trChildren[4].innerHTML = filmObject.filme[zeile].genre;
            }
            break;
    }


}

function checkInputElements() {
    var check = true;
    var missing = [];

    var elements = document.getElementsByTagName('input');
    var textArea = document.getElementsByTagName('textarea');
    for (var inputElement = 0; inputElement < elements.length; inputElement++) {
        var localcheck = true;
        var currElement = elements[inputElement];
        if (currElement.type != "checkbox") {
            switch (currElement.id) {
                case "filmtitel":
                    if (!currElement.value.match("(([0-9]|[a-z]|ä|ö|ü|Ü|Ä|Ö))+( *(([a-z]|[0-9]|ä|ö|ü|Ü|Ä|Ö))*)+")) {
                        //alert("Film falsch");
                        localcheck = false;
                    }
                    break;
                case "albumtitel":
                    if (!currElement.value.match("(([0-9]|[a-z]|ä|ö|ü|Ü|Ä|Ö))+( *(([a-z]|[0-9]|ä|ö|ü|Ü|Ä|Ö))*)+")) {
                        //alert("Album falsch");
                        localcheck = false;
                    }
                    break;
                case "interpreter":
                    if (!currElement.value.match("([a-zA-Z]|ä|ö|ü|Ü|Ä|Ö)+( ([a-zA-Z]|ä|ö|ü|Ü|Ä|Ö)*)*")) {
                        //alert("Interpreter falsch");
                        localcheck = false;
                    }
                    break;
                case "regie":
                    if (!currElement.value.match("([a-zA-Z]+ [a-zA-Z]*)")) {
                        //alert("Regie falsch");
                        localcheck = false;
                    }
                    break;
                case "drehbuch":
                    if (!currElement.value.match("([a-zA-Z]|ä|ö|ü|Ü|Ä|Ö+ [a-zA-Z]|ä|ö|ü|Ü|Ä|Ö*)")) {
                        //alert("Drehbuch falsch");
                        localcheck = false;
                    }
                    break;
                case "schauspieler":
                    if (!currElement.value.match("([a-zA-Z]|ä|ö|ü|Ü|Ä|Ö+,[a-zA-Z]|ä|ö|ü|Ü|Ä|Ö*)")){
                        localcheck =false;
                    }
                case "songs":
                    if(!currentElement.value.match("([a-zA-Z]|ä|ö|ü|Ü|Ä|Ö+,[a-zA-Z]|ä|ö|ü|Ü|Ä|Ö*)")){
                        localcheck=false;
                    }
                case "erscheinungsjahr":
                    if (!currElement.value.match("[0-9]{4}")) {
                        //alert("Ersch falsch");
                        localcheck = false;
                    } else {
                        var temp = new Date(currElement.value + "-01-01");
                        if (temp > new Date()) {
                            //alert("Ersch falsch");
                            localcheck = false;
                        }
                    }
                    break;
            }
        }

        if (!localcheck) {
            currElement.className = "error";
            missing.push(currElement.name)

            if (check) {
                currElement.focus();
                check = localcheck;
            }
        }
        else {
            currElement.className = "";
        }
    }
    var textAreaElement = textArea[0];
    if (!textAreaElement.value.match("^(([a-zA-Z]|ä|ö|ü|Ü|Ä|Ö)+[,\s]+)*([a-zA-Z]|ä|ö|ü|Ü|Ä|Ö)+$")) {
        textAreaElement.className = "error";
        missing.push(textAreaElement.name);
        textAreaElement.focus();
        check = false;
    }
    if (!check) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben. \n" + missing.join(", "));
    }

    return check;
}
