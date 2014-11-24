/**
 * Created by Nurcan on 23.11.2014.
 */

function musicZeile(){
    if (zulassigAlphabetNummer(document.getElementById("albumtitel"))&&
            zulassigAlphabet(document.getElementById("interpreter"))&&
            zulassigJahre(document.getElementById("jahr"))&&
            zulassigAlphabetKomma(document.getElementById("lied"))
    ){
        return true;
    }else{
        alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
        return false;
    }
}


function filmZeile(){
    if (zulassigAlphabetNummer(document.getElementById("filmtitel"))&&
        zulassigAlphabetLeerzeichen(document.getElementById("regie"))&&
        zulassigAlphabetLeerzeichen(document.getElementById("drehbuch"))&&
        zulassigJahre(document.getElementById("erscheinungsjahr"))&&
        zulassigAlphabetKomma(document.getElementById("schauspieler"))
    ){
        return true;
    }else{
        alert("Einige Eingaben sind fehlerhaft.Bitte überprüfen Sie ihre Eingaben");
        return false;
    }
}

function zulassigAlphabetNummer(elem){
    var regex = /(([0-9]|[a-z]|ä|ö|ü|Ü|Ä|Ö))+( *(([a-z]|[0-9]|ä|ö|ü|Ü|Ä|Ö))*)+/;
    if(elem.value.match(regex)){
        return true;
    }else{
        falscheEingabe(elem);
        return false;
    }
}

function zulassigAlphabet(elem){
    var regex = /^(([0-9]|[a-z]|ä|ö|ü|Ü|Ä|Ö))+( *(([a-z]|[0-9]|ä|ö|ü|Ü|Ä|Ö))*)+/;

    if(elem.value.match(regex)){
        return true;
    }else{
        falscheEingabe(elem);
        return false;
    }
}

function zulassigJahre(elem){
    var regex = /^[0-9]{4}/;
    var datum = new Date().getFullYear();

    if(elem.value.match(regex)&& elem.value<=datum){
        return true;
    }else{
        falscheEingabe(elem);
        return false;
    }
}

function falscheEingabe(elem){
    elem.setAttribute("class","falscherInput");
    elem.focus();
}