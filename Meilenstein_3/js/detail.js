function hauptSicht(){
LadeTabelle(document.getElementById("filmButton"),filmData.filme);
}


function LadeTabelle(that, path){
    //die farbe der selektierten buttons wird geändert
    that.setAttribute("class","selected");

    //die farbe der nichtselektierten buttons wird auch geändert bzw. bleibt

    if(path == musicData.music){

        var elem = document.getElementById("musicButton");
        elem.setAttribute("class", "buttons");
    }else{
        var elem= document.getElementById("filmButton");
        elem.setAttribute("class","buttons");
    }

    var filmHinzu = document.getElementById("fulleTabelle");

    while(filmHinzu.hasChildNodes()){
        filmHinzu.removeChild(filmHinzu.lastChild);
    }

    var tr = document.createElement('tr');
    for(zulassig in path[0]){
        var td = tr.appendChild(document.createElement('td'));
        td.innerHTML = zulassig;
    }
    tr.setAttribute("class","tabellenKopf");
    fulleTabelle.appendChild(tr);

    for(index in path){
        var tr = document.createElement('tr');
        for(besitzt in path[index]){
            var td = tr.appendChild(document.createElement('td'));
            td.innerHTML = path[index][besitzt];
            fulleTabelle.appendChild(tr);
        }
        tr.setAttribute("class","tabellenBody");
    }
}



























