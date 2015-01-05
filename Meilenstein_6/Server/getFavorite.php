<?php
header('Content-Type: application/json');
$json_url = "";
if(isset($_GET["button"]) && $_GET["button"] == "Musik") {
// Verbindung aufbauen, auswählen einer Datenbank
$link = mysql_connect("localhost", "root", "root")
or die("Keine Verbindung möglich: " . mysql_error());
echo "Verbindung zum Datenbankserver erfolgreich";
mysql_select_db("waw") or die("Auswahl der Datenbank fehlgeschlagen");

// Ausführen einer SQL-Anfrage
$query = "SELECT Musik_MusikID FROM musikfavorit";
$result = mysql_query($query) or die("Anfrage fehlgeschlagen: " . mysql_error());
$array = array();
$i = 0;

while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    foreach ($line as $col_value) {
        $sql = "Select * From musik Where MusikID='$col_value'";
        $result1 = mysql_query($sql) or die("Anfrage fehlgeschlagen: " . mysql_error());
        while ($line1 = mysql_fetch_array($result1, MYSQL_ASSOC)) {
            foreach ($line1 as $col_value1) {
            }

        }
    }

}


// Freigeben des Resultsets
mysql_free_result($result);

// Schließen der Verbinung
mysql_close($link);




$json_url = "music_json.json";
}else {
    $json_url = "film_json.json";
}
$data = file_get_contents($json_url);

print_r($data);
?>

