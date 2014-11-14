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
        var currElement = elements[inputElement]
        alert(currElement.id);
        alert(currElement.tagName);
        switch (currElement.id) {
            case "filmtitel":
                if (!elements[inputElement].innerHTML.match("([0-9]|\\ |[a-z])*")) {
                    localcheck = false
                }
                break;
            case "albumtitel":
                if (!elements[inputElement].innerHTML.match("([0-9]|\\ |[a-z])*")) {
                    localcheck = false
                }
                break;
            case "interpreter":
                if (!elements[inputElement].innerHTML.match("([a-zA-Z]*\\ [a-zA-Z]*)")) {
                    localcheck = false
                }
                break;
            case "regie":
                if (!elements[inputElement].innerHTML.match("([a-zA-Z]*\ [a-zA-Z]*)")) {
                    localcheck = false
                }
                break;
            case "drehbuch":
                if (!elements[inputElement].innerHTML.match("([a-zA-Z]*\ [a-zA-Z]*)")) {
                    localcheck = false
                }
                break;
            case "erscheinungsjahr":
                if (!elements[inputElement].innerHTML.match("([a-zA-Z]*\ [a-zA-Z]*)") && currElement.innerHTML > new Date().getYear) {
                    localcheck = false
                }
                break;
            case "schauspieler":
                if ((!elements[inputElement].innerHTML.match("([a-zA-Z]+\,[a-zA-Z]+)*)") || !elements[inputElement].innerHTML.match("([a-zA-Z]+)"))) {
                    localcheck = false
                }
                break;
            case "song":
                if ((!elements[inputElement].innerHTML.match("([a-zA-Z]+\,[a-zA-Z]+)*)") || !elements[inputElement].innerHTML.match("([a-zA-Z]+)"))) {
                    localcheck = false
                }
                break;
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
    if(textArea.innerHTML.match("([a-zA-Z]+\,[a-zA-Z]+)*)") || !elements[inputElement].innerHTML.match("([a-zA-Z]+)")){
        textArea.className = "error";
        missing.push(textArea.name);
        textArea.focus();
    }

    if (!check) {
        alert("Fehler bei der Eingabe der Felder: \n" + missing.join(", "));
    }

    return check;
}
