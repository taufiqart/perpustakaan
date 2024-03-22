<?php
use App\Meta;

function MetadataPerpus()
{
    return [
        "url" => [url("")],
        "image" => [url("/assets/icons/logo.png")],
        "title" => [
            "Perpustakaan SMKN 1 Pasuruan",
            "Perpustakaan SMKN 1 Pasuruan"
        ],
        "description" => [
            "Portal Perpustakaan SMKN 1 Pasuruan",
            "Portal Perpustakaan SMKN 1 Pasuruan"
        ],
        "keywords" => [
            "perpustakaan,article,portal,info"
        ],
        "type" => [
            "article"
        ]
    ];
}
function MetadataSitusiba()
{
    return [
        "url" => [url("")],
        "image" => [url("/assets/icons/logo.png")],
        "title" => [
            "SITU SIBA",
            "SITU SIBA Silahkan Tulis Silahkan Baca"
        ],
        "description" => [
            "Selamat datang di SITU SIBA disini kami menyediakan platform bagi siswa siswi SMKN 1 Pasuruan 
            agar Karya Tulis seperti Cerpen, Novel ataupun karya ilmiah agar dapat dipublish dan dibaca oleh umum.",

            "Selamat datang di SITU SIBA disini kami menyediakan platform bagi siswa siswi SMKN 1 Pasuruan 
            agar Karya Tulis seperti Cerpen, Novel ataupun karya ilmiah agar dapat dipublish dan dibaca oleh umum."
        ],
        "keywords" => [
            "baca,membaca,article,karya,karya tulis,karya ilmiah"
        ],
        "type" => [
            "article"
        ]
    ];
}

function DefaultMetadata($type = "perpus", $metadata = null)
{
    if (empty ($metadata)) {
        if ($type == "perpus") {
            $metadata = MetadataPerpus();
        } elseif ($type == "situsiba") {
            $metadata = MetadataSitusiba();
        }
    }

    foreach ($metadata as $key => $meta) {

        if ($key == "title") {
            Meta::addProperty('twitter:image:alt', $meta[random_int(0, count($meta) - 1)]);
            Meta::addProperty('og:image:alt', $meta[random_int(0, count($meta) - 1)]);
        }
        if ($key == "image") {
            MetadataImage($meta[random_int(0, count($meta) - 1)]);
        }
        if (!in_array($key, ["image"])) {
            Meta::addMeta($key, $meta[random_int(0, count($meta) - 1)]);
            Meta::addProperty("og:$key", $meta[random_int(0, count($meta) - 1)]);
        }
    }

    if (empty ($metadata["image"])) {
        MetadataImage();
    }

    Meta::addProperty('twitter:card', "summary_large_image");
}

function MetadataImage($image_url = "/assets/icons/logo.png", $title = null)
{
    if (!str_contains($image_url, "://")) {
        $image_url = url($image_url);
    }

    Meta::addMeta('image', $image_url);
    Meta::addProperty('og:image', $image_url);
    Meta::addProperty('og:image:width', "900");
    Meta::addProperty('og:image:height', "330");
    Meta::addProperty('og:image', $image_url);
    Meta::addProperty('og:image:width', "300");
    Meta::addProperty('og:image:height', "330");
    Meta::addProperty('og:image', $image_url);

    if (!empty ($title)) {
        Meta::addProperty('og:image:alt', $title);
    }
    Meta::addProperty('twitter:image', $image_url);
}

function GenerateDescription($paper)
{
    $description = "";

    if (!empty ($paper?->user?->user_detail?->full_name)) {
        $description = "by {$paper?->user?->user_detail?->full_name}";
    } else {
        $description = "by Anonymous";
    }

    $content = substr(clear_html_tag($paper->content), 0, 160);

    if (!empty ($content)) {
        $description = "{$description}\n{$content}";
    }

    if (strlen($description) > 4) {
        return $description;
    }

    return null;
}