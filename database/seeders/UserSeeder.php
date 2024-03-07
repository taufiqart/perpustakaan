<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Admin Perpustakaan SKENSA',
                'email' => 'admin@perpustakaanskensa.com',
                'role' => 'admin',
                "address" => "JL IIIII",
                "gender" => "male",
                "date_of_birth" => "2004-10-10",
                "place_of_birth" => "Pasuruan",
                "member_type_id" => '3'
            ],
            [
                'name' => 'Siswa Perpustakaan SKENSA',
                'email' => 'siswa@perpustakaanskensa.com',
                'role' => 'user',
                "address" => "JL IIIII",
                "gender" => "male",
                "date_of_birth" => "2004-10-10",
                "place_of_birth" => "Pasuruan",
                "major_id" => '1',
                "class_room_id" => '1',
                "member_type_id" => '1'
            ],
            [
                'name' => 'Guru Perpustakaan SKENSA',
                'email' => 'guru@perpustakaanskensa.com',
                'role' => 'user',
                "address" => "JL IIIII",
                "gender" => "male",
                "date_of_birth" => "2004-10-10",
                "place_of_birth" => "Pasuruan",
                "member_type_id" => '2'
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
                "avatar" => "https://robohash.org/set_set2/bgset_bg2/" . md5($user->email),
                "address" => $user->address,
                "gender" => $user->gender,
                "date_of_birth" => $user->date_of_birth,
                "place_of_birth" => $user->place_of_birth,
                "major_id" => @$user->major_id,
                "class_room_id" => @$user->class_room_id,
                "member_type_id" => $user->member_type_id
            ]);

        });
    }
}
