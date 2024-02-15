<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Post extends Model
{
    use Sluggable;

    use HasFactory;
    protected $guarded = ['id'];

    public function sluggable(): array
    {
        return [
            "slug" => [
                "source" => "title",
            ],
        ];
    }

    public function post_assets()
    {
        return $this->hasMany(PostAsset::class, 'post_id');
    }
    public function post_type()
    {
        return $this->belongsTo(PostType::class, 'type_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
