<?php

include "Upload.php";


function clean_directive($data)
{
    $data = str_replace("src=\"/../../..", "src=\"", $data);
    $data = str_replace("src=\"/../../..", "src=\"", $data);
    $data = str_replace("src=\"../../..", "src=\"", $data);
    $data = str_replace("src=\"/../..", "src=\"", $data);
    $data = str_replace("src=\"../..", "src=\"", $data);
    return $data;
}

function randomFilename($extension)
{
    $timestamp = time();
    $randomInt = implode("-",[random_int(1000, 9999),random_int(100000, 999999)]);
    return "$timestamp-$randomInt.$extension";
}