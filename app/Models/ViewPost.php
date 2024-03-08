<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewPost extends Model
{
    use HasFactory;

    protected $guarded = ["id"];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }
}
