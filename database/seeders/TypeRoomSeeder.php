<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeRoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('type_rooms')->insert([
            'name' => 'Familiar',
            'bed_quantity' => 3,
        ]);

        DB::table('type_rooms')->insert([
            'name' => 'Double',
            'bed_quantity' => 2,
        ]);

        DB::table('type_rooms')->insert([
            'name' => 'Single',
            'bed_quantity' => 1,
        ]);
    }
}
