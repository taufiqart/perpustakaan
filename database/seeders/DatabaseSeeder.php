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

        (new MenuItemSeeder)->run();
        (new MajorClassSeeder)->run();
        (new DefaultDataSeeder)->run();
        (new UserSeeder)->run();
        (new TestDataSeeder)->run();
        
    }
}
