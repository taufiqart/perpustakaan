<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MajorClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect(['X', 'XI', 'XII', 'XIII'])->map(function ($class) {
            \App\Models\ClassRoom::create([
                "class" => $class
            ]);
        });

        $majors = [
            [
                "major" => "REKAYASA PERANGKAT LUNAK",
                "short" => "RPL"
            ],
            [
                "major" => "TEKNIK KOMPUTER DAN JARINGAN",
                "short" => "TKJ"
            ],
            [
                "major" => "DESAIN KOMUNIKASI VISUAL",
                "short" => "DKV"
            ],
        ];

        collect(json_decode(json_encode($majors)))->map(function ($major) {
            \App\Models\Major::create([
                "short" => $major->short,
                "major" => $major->major
            ]);
        });
    }
}
