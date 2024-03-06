<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MajorClass extends Model
{
    use HasFactory;

    protected $table = "major_v_classes";
    protected $guarded = ['id'];
    protected $with = ['class_room','major'];

    public function class_room(){
        return $this->belongsTo(ClassRoom::class,'class_id');
    }
    public function major(){
        return $this->belongsTo(Major::class,'major_id');
    }

}
