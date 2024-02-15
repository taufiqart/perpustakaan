<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class PostGenre extends Model
{
    use HasFactory;
    use Sluggable;

    public function sluggable(): array
    {
        return [
            "slug"  => [
                "source" => "genre",
            ],
        ];
    }
}
