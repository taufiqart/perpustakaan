<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestDataSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $users = [];

        for ($data = 0; $data <= 100; $data++) {
            $random = random_int(0, 1000);
            $identity = [];
            for ($i = 0; $i <= 13; $i++) {
                array_push($identity, random_int(0, 10));
            }
            $identity = implode("", $identity);

            $user = [
                'name' => "Siswa $data $random Perpustakaan SKENSA",
                'email' => "$data.siswa.$random@perpustakaanskensa.com",
                'role' => ($data % 5 == 0) ? 'admin' : 'user',
                "address" => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                "identity_type_id" => 2,
                "identity" => $identity,
                "member_type_id" => random_int(1, 2),
                "gender" => ($data % 2 == 0) ? "male" : "female",
                "place_of_birth" => "Pasuruan",
                "date_of_birth" => "2004-02-01",
                "phone_number" => strrev($identity)
            ];



            if ($user["member_type_id"] == 1) {
                $user["class_room_id"] = random_int(1, 3);
                $user["major_id"] = random_int(1, 3);
            }

            if ($user["member_type_id"] == 2 || $user["member_type_id"] == 3) {
                $user["identity_type_id"] = 1;
                $user["name"] = str_replace("Siswa", "Guru", $user["name"]);
                $user["email"] = str_replace("siswa", "guru", $user["email"]);
            }

            if ($user["role"] == "admin") {
                $user["member_type_id"] = 3;
                $user["identity_type_id"] = 1;
                $user["name"] = str_replace("Siswa", "Admin", $user["name"]);
                $user["email"] = str_replace("siswa", "admin", $user["email"]);
            }

            array_push($users, $user);
        }

        collect(json_decode(json_encode($users)))->map(function ($user) {
            $_user = \App\Models\User::create([
                "name" => $user->name,
                "email" => $user->email,
                "password" => "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
                "role" => $user->role,
            ]);
            $_user->user_detail()->create([
                "address" => $user->address,
                "full_name" => $user->name,
                "identity_type_id" => @$user->identity_type_id,
                "identity" => @$user->identity,
                "member_type_id" => @$user->member_type_id,
                "gender" => $user->gender,
                "place_of_birth" => $user->place_of_birth,
                "date_of_birth" => $user->date_of_birth,
                "phone_number" => @$user->phone_number,
                "class_room_id" => @$user->class_room_id,
                "major_id" => @$user->major_id,
                "avatar" => @$user->avatar ?? "https://robohash.org/set_set2/bgset_bg2/" . md5($user->email),
            ]);

        });

    }
}
