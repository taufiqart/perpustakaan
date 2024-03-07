<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassRoom extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user_details(){
        return $this->hasMany(ClassRoom::class,'class_room_id');
    }
}
