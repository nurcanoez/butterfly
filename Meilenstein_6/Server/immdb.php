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
        "erscheinungsjahr"=>"/^\d{4}$/",
        "schauspieler"=>"/^([a-zA-ZäöüÄÖÜß]+[,\s]+)*[a-zA-ZäöüÄÖÜß]+$/",
        "filmgenre" => "/^[a-zA-ZäöüÄÖÜß]+$/"
        );


//die eingebenen Dateien werden mit den vorhanden Tabellen (Film und Musik) verglichen und dementsprechend
    //in txt.Datei eingeschrieben
    foreach ($_GET as $titel => $in) {
        foreach ($musikTitel as $musik => $in) {

            if ($titel==$musik) {
                schreibeInDB($musikTitel, $_GET, 1);
                exit;
            }
        }

        foreach ($filmTitel as $film => $in) {
            if ($titel==$film) {
                schreibeInDB($filmTitel, $_GET, 2);
                exit;
            }
        }
    }
}

function schreibeInDB($eingabeArray, $parameter, $ziel) {
// Verbindung aufbauen, auswählen einer Datenbank
    $link = mysql_connect("localhost", "root", "root")
    or die("Keine Verbindung möglich: " . mysql_error());
    mysql_select_db("waw") or die("Auswahl der Datenbank fehlgeschlagen");
    $array = array();

// Ausführen einer SQL-Anfrag


        $i = 0;

        foreach ($eingabeArray as $titel => $value) {
            if (preg_match($eingabeArray[$titel], $parameter[$titel])) {
                $array[$i] = "" . $parameter[$titel];
                $i++;
            }
        }
    if($ziel==1) {
        $query = "INSERT INTO musik (Interpreter,Albumtitel,Erscheinungsjahr,Songs,Genre) VALUES ('$array[0]','$array[1]', '$array[2]','$array[3]','$array[4]')";
    }else{
        $query = "INSERT INTO film (Filmtitel,Regie,Drehbuch,Erscheinungsjahr,Schauspieler,Genre) VALUES ('$array[0]','$array[1]', '$array[2]','$array[3]','$array[4]','$array[5]')";
    }

    $result = mysql_query($query) or die("Anfrage fehlgeschlagen: " . mysql_error());


    mysql_close($link);
    }


?>