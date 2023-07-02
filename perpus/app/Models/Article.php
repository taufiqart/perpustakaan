<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class Article extends Model
{
    use Sluggable;
    use HasFactory;
    use SoftDeletes;

    protected $with = ['category'];

    protected $guarded = ['id'];
    public function sluggable(): array
    {
        return [
            "slug"  => [
                "source" => "title",
            ],
        ];
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
