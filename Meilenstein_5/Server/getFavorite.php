<?php
header('Content-Type: application/json');
$json_url = "";
if(isset($_GET["button"]) && $_GET["button"] == "Musik")
    $json_url = "music_json.json";
else
    $json_url = "film_json.json";
$data = file_get_contents($json_url);

print_r($data);
?>

