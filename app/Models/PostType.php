<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class PostType extends Model
{
    use HasFactory;
    use Sluggable;
    protected $guarded = ['id'];

    public function sluggable(): array
    {
        return [
            "slug" => [
                "source" => "type",
            ],
        ];
    }

    public function posts()
    {
        return $this->hasMany(Post::class, 'type_id');
    }
}
