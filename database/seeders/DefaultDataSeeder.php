<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DefaultDataSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        

        collect(["KTP/NIK", "NIS"])->map(function ($identity) {
            \App\Models\IdentityType::create([
                "type" => $identity
            ]);
        });

        collect(["SISWA", "GURU", "KARYAWAN"])->map(function ($member) {
            \App\Models\MemberType::create([
                "type" => $member
            ]);
        });

        collect(["video", "paper"])->map(function ($type) {
            \App\Models\PostType::create([
                "slug" => $type,
                "type" => $type
            ]);
        });

        collect(["Novel", "Cerpen", "Puisi", "Karya Ilimiah"])->map(function ($type) {
            \App\Models\PostCategory::create([
                "slug" => str_replace(" ", "-", strtolower($type)),
                "category" => $type
            ]);
        });

        collect(['Genre Aksi', 'Komedi', 'Romantis', 'Drama', 'Petualangan', 'Science Fiction', 'Horor', 'Thriller', 'Animasi', 'Misteri', 'Biografi', 'Dokumenter', 'Fantasi', 'Musikal', 'Perang'])->map(function ($type) {
            \App\Models\PostGenre::create([
                "slug" => str_replace(" ", "-", strtolower($type)),
                "genre" => $type
            ]);
        });
    }
}
