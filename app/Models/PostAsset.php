<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostAsset extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected static function booted () {
        static::deleting(function(User $user) { // before delete() method call this
             return dd($this);
        });
    }
}
