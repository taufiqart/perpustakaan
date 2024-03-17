<?php

include "Upload.php";
include "Metadata.php";


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
    $randomInt = implode("-", [random_int(1000, 9999), random_int(100000, 999999)]);
    return "$timestamp-$randomInt.$extension";
}

function getGenderOption()
{
    $gender = [["label" => "Laki-Laki", "value" => "male"], ["label" => "Perempuan", "value" => "female"]];
    return $gender;
}

