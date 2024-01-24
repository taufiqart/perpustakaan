<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = ['id'];
    protected $with = ['child'];

    public function child()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id')->orderBy('order', 'asc');
    }

    public function article()
    {
        return $this->hasOne(Article::class);
    }
}
