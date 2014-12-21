<?php
echo "Butterfly <br />";

eingaben();

function eingaben() {
    $musikTitel = array("interpreter"=>"/^([a-zA-ZäöüÄÖÜß]+[\s]+)*[a-zA-ZäöüÄÖÜß]+$/",
        "albumtitel"=>"/^([a-zA-Z0-9äöüÄÖÜß]+[\s]+)*[a-zA-Z0-9äöüÄÖÜß]+$/",
        "musicerscheinungsjahr"=>"/^\d{4}$/",
        "songs"=>"/^([a-zA-ZäöüÄÖÜß]+[,\s]+)*[a-zA-ZäöüÄÖÜß]+$/",
        "musicgenre"=>"/^[a-zA-ZäöüÄÖÜß]+$/");

    $filmTitel = array("filmtitel"=>"/^([a-zA-Z0-9äöüÄÖÜß]+[\s]+)*[a-zA-Z0-9äöüÄÖÜß]+$/",
        "regie"=>"/^[a-zA-ZäöüÄÖÜß]+\s[a-zA-ZäöüÄÖÜß]+$/",
        "drehbuch"=>"/^[a-zA-ZäöüÄÖÜß]+\s[a-zA-ZäöüÄÖÜß]+$/",
        "filmerscheinungsjahr"=>"/^\d{4}$/",
        "schauspieler"=>"/^([a-zA-ZäöüÄÖÜß]+[,\s]+)*[a-zA-ZäöüÄÖÜß]+$/");


//die eingebenen Dateien werden mit den vorhanden Tabellen (Film und Musik) verglichen und dementsprechend
    //in txt.Datei eingeschrieben
    foreach ($_GET as $titel => $in) {
        foreach ($musikTitel as $musik => $in) {

            if ($titel==$musik) {
                schreibeInDatei($musikTitel, $_GET, "musik.txt");
                exit;
            }
        }

        foreach ($filmTitel as $film => $in) {
            if ($titel==$film) {
                schreibeInDatei($filmTitel, $_GET, "film.txt");
                exit;
            }
        }
    }
}

function schreibeInDatei($eingabeArray, $parameter, $ziel) {
    $file = fopen($ziel, 'a') or die('Cannot open file: '.$ziel);
    foreach ($eingabeArray as $titel => $value) {
        if (preg_match($eingabeArray[$titel], $parameter[$titel])) {
            $data = "" . $parameter[$titel]. ";";
            fwrite($file, $data);
        }
    }
    fwrite($file, "\n");
    fclose($file);
}
?>