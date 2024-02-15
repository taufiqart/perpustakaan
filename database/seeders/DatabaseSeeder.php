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
        // \App\Models\User::factory(10)->create();

        collect(["KTP/NIK","NIS"])->map(function($identity){
            \App\Models\IdentityType::create([
                "type"=>$identity
            ]);
        });

        collect(["SISWA","GURU","KARYAWAN"])->map(function($member){
            \App\Models\MemberType::create([
                "type"=>$member
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

        collect(json_decode(json_encode($users)))->map(function($user){
            $user_id = \App\Models\User::create([
                "name"=>$user->name,
                "email"=>$user->email,
                "password"=>"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
                "role"=>$user->role,
            ]);
            \App\Models\UserDetail::create([
                "user_id"=>$user_id->id,
                "full_name"=>$user->name,
                "avatar"=>$user->avatar,
                "address"=>$user->address,
                "gender"=>$user->gender,
                "date_of_birth"=>$user->date_of_birth,
                "place_of_birth"=>$user->place_of_birth,
            ]);

        });

        collect(["video","paper"])->map(function($type){
            \App\Models\PostType::create([
                "slug"=>$type,
                "type"=>$type
            ]);
        });

        collect(["Novel","Cerpen","Puisi","Karya Ilimiah"])->map(function($type){
            \App\Models\PostCategory::create([
                "slug"=> str_replace(" ","-",strtolower($type)),
                "category"=>$type
            ]);
        });

        collect(['Genre Aksi', 'Komedi', 'Romantis', 'Drama', 'Petualangan', 'Science Fiction', 'Horor', 'Thriller', 'Animasi', 'Misteri', 'Biografi', 'Dokumenter', 'Fantasi', 'Musikal', 'Perang'])->map(function($type){
            \App\Models\PostGenre::create([
                "slug"=> str_replace(" ","-",strtolower($type)),
                "genre"=>$type
            ]);
        });

        // \App\Models\User::factory()->create([
        //     'id' => 1,
        //     'name' => 'Admin Perpustakaan SKENSA',
        //     'email' => 'admin@perpustakaanskensa.com',
        //     'role' => 'admin',
        // ]);
        // \App\Models\User::factory()->create([
        //     'name' => 'Siswa Perpustakaan SKENSA',
        //     'email' => 'siswa@perpustakaanskensa.com',
        //     'role' => 'siswa',
        // ]);
        // \App\Models\User::factory()->create([
        //     'name' => 'Guru Perpustakaan SKENSA',
        //     'email' => 'guru@perpustakaanskensa.com',
        //     'role' => 'guru',
        // ]);

        \App\Models\Category::factory()->create([
            'title' => 'Beranda',
            'slug' => '/',
        ]);

        // \App\Models\Category::factory(10)->create();
        // \App\Models\Article::factory(10)->create();
    }
}
