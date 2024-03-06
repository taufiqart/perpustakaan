<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $with = ['major_class.class_room'];
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function major_class(){
        return $this->belongsTo(MajorClass::class,'major_class_id','id');
    }
}
