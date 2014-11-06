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
