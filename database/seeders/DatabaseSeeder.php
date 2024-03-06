<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
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
        
        \App\Models\MajorClass::create([
            "class_id" => '1',
            "major_id" => '1'
        ]);

        \App\Models\MajorClass::create([
            "class_id" => '1',
            "major_id" => '2'
        ]);

        \App\Models\MajorClass::create([
            "class_id" => '1',
            "major_id" => '3'
        ]);

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

        $users = [
            [
                'name' => 'Admin Perpustakaan SKENSA',
                'email' => 'admin@perpustakaanskensa.com',
                'role' => 'admin',
                "avatar" => "https://robohash.org/set_set2/bgset_bg2/uNfG0V6Z3t1Sdr9fqg",
                "address" => "JL IIIII",
                "gender" => "male",
                "date_of_birth" => "2004-10-10",
                "place_of_birth" => "Pasuruan",
            ],
            [
                'name' => 'Siswa Perpustakaan SKENSA',
                'email' => 'siswa@perpustakaanskensa.com',
                'role' => 'user',
                "avatar" => "https://robohash.org/set_set2/bgset_bg2/uNfG0V6Z3t1Sdr9fqg",
                "address" => "JL IIIII",
                "gender" => "male",
                "date_of_birth" => "2004-10-10",
                "place_of_birth" => "Pasuruan",
                "major_class_id"=>'1'
            ],
            [
                'name' => 'Guru Perpustakaan SKENSA',
                'email' => 'guru@perpustakaanskensa.com',
                'role' => 'user',
                "avatar" => "https://robohash.org/set_set2/bgset_bg2/uNfG0V6Z3t1Sdr9fqg",
                "address" => "JL IIIII",
                "gender" => "male",
                "date_of_birth" => "2004-10-10",
                "place_of_birth" => "Pasuruan",
            ],
        ];

        collect(json_decode(json_encode($users)))->map(function ($user) {
            $user_id = \App\Models\User::create([
                "name" => $user->name,
                "email" => $user->email,
                "password" => "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
                "role" => $user->role,
            ]);
            \App\Models\UserDetail::create([
                "user_id" => $user_id->id,
                "full_name" => $user->name,
                "avatar" => $user->avatar,
                "address" => $user->address,
                "gender" => $user->gender,
                "date_of_birth" => $user->date_of_birth,
                "place_of_birth" => $user->place_of_birth,
                "major_class_id" => 1,
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

        

        $navigations = [
            [
                "title"=>"Beranda",
                "slug"=>"/",
                "parent_id"=>null,
                "order"=>1,
            ],
            [
                "title"=>"Profile",
                "slug"=>"profile",
                "parent_id"=>null,
                "order"=>2,
            ],
            [
                "title"=>"Promosi",
                "slug"=>"promosi",
                "parent_id"=>null,
                "order"=>3,
            ],
            [
                "title"=>"E-Presensi",
                "slug"=>"e-presensi",
                "parent_id"=>null,
                "order"=>4,
            ],
            [
                "title"=>"Pendaftaran Anggota",
                "slug"=>"pendaftaran-anggota",
                "parent_id"=>null,
                "order"=>5,
            ],
            [
                "title"=>"Ruang",
                "slug"=>"ruang",
                "parent_id"=>null,
                "order"=>6,
            ],
            [
                "title"=>"Usulan Koleksi",
                "slug"=>"usulan-koleksi",
                "parent_id"=>null,
                "order"=>7,
            ],
            [
                "title"=>"Survey",
                "slug"=>"survey",
                "parent_id"=>null,
                "order"=>8,
            ],
            [
                "title"=>"Katalog e-book",
                "slug"=>"katalog-e-book",
                "parent_id"=>null,
                "order"=>9,
            ],
            [
                "title"=>"Link",
                "slug"=>"link",
                "parent_id"=>null,
                "order"=>10,
            ],
            [
                "title"=>"Kerja Sama Eksternal",
                "slug"=>"kerja-sama-eksternal",
                "parent_id"=>null,
                "order"=>11,
            ],
            [
                "title"=>"SITU SIBA",
                "slug"=>"situsiba",
                "parent_id"=>null,
                "order"=>12,
            ],
            [
                "title"=>"Nomor Pokok Perpustakaan",
                "slug"=>"nomor-pokok-perpustakaan",
                "parent_id"=>2,
                "order"=>1,
            ],
            [
                "title"=>"SK Pendirian Perpustakaan",
                "slug"=>"sk-pendirian-perpustakaan",
                "parent_id"=>2,
                "order"=>2,
            ],
            [
                "title"=>"Visi Misi Perpustakaan",
                "slug"=>"visi-misi-perpustakaan",
                "parent_id"=>2,
                "order"=>3,
            ],
            [
                "title"=>"Tata Tertib",
                "slug"=>"tata-tertib",
                "parent_id"=>2,
                "order"=>4,
            ],
        ];

        collect(json_decode(json_encode($navigations)))->map(function($navigation){
            \App\Models\Category::factory()->create([
                "title" => $navigation->title,
                "slug" => $navigation->slug,
                "parent_id" => $navigation->parent_id,
                "order" => $navigation->order,
            ]);
        });

        // \App\Models\Category::factory(10)->create();
        // \App\Models\Article::factory(10)->create();
    }
}
