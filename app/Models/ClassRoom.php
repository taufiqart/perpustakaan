<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassRoom extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function major(){
        return $this->belongsToMany(Major::class,'major_v_classes','class_id','major_id');
    }
}
