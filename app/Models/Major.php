<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function class_room(){
        return $this->belongsToMany(ClassRoom::class,'major_v_classes','major_id','class_id');
    }
}
