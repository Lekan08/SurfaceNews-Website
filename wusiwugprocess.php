<?php

if (isset($_POST['submit_data'])) {
    # code...
    $title = $_POST['editor1'];
    echo "<script>console.log('Debug Objects: " . $title . "' );</script>";
}

?>