<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $navigations = [
            [
                "title" => "Beranda",
                "slug" => "/",
                "parent_id" => null,
                "order" => 1,
            ],
            [
                "title" => "Profile",
                "slug" => "profile",
                "parent_id" => null,
                "order" => 2,
            ],
            [
                "title" => "Promosi",
                "slug" => "promosi",
                "parent_id" => null,
                "order" => 3,
            ],
            [
                "title" => "E-Presensi",
                "slug" => "e-presensi",
                "parent_id" => null,
                "order" => 4,
            ],
            [
                "title" => "Pendaftaran Anggota",
                "slug" => "pendaftaran-anggota",
                "parent_id" => null,
                "order" => 5,
            ],
            [
                "title" => "Ruang",
                "slug" => "ruang",
                "parent_id" => null,
                "order" => 6,
            ],
            [
                "title" => "Usulan Koleksi",
                "slug" => "usulan-koleksi",
                "parent_id" => null,
                "order" => 7,
            ],
            [
                "title" => "Survey",
                "slug" => "survey",
                "parent_id" => null,
                "order" => 8,
            ],
            [
                "title" => "Katalog e-book",
                "slug" => "katalog-e-book",
                "parent_id" => null,
                "order" => 9,
            ],
            [
                "title" => "Link",
                "slug" => "link",
                "parent_id" => null,
                "order" => 10,
            ],
            [
                "title" => "Kerja Sama Eksternal",
                "slug" => "kerja-sama-eksternal",
                "parent_id" => null,
                "order" => 11,
            ],
            [
                "title" => "Nomor Pokok Perpustakaan",
                "slug" => "nomor-pokok-perpustakaan",
                "parent_id" => 2,
                "order" => 1,
            ],
            [
                "title" => "SK Pendirian Perpustakaan",
                "slug" => "sk-pendirian-perpustakaan",
                "parent_id" => 2,
                "order" => 2,
            ],
            [
                "title" => "Visi Misi Perpustakaan",
                "slug" => "visi-misi-perpustakaan",
                "parent_id" => 2,
                "order" => 3,
            ],
            [
                "title" => "Tata Tertib",
                "slug" => "tata-tertib",
                "parent_id" => 2,
                "order" => 4,
            ],
        ];

        collect(json_decode(json_encode($navigations)))->map(function ($navigation) {
            \App\Models\Category::factory()->create([
                "title" => $navigation->title,
                "slug" => $navigation->slug,
                "parent_id" => $navigation->parent_id,
                "order" => $navigation->order,
            ]);
        });

    }
}
