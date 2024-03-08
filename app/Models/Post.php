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
    public function categories()
    {
        return $this->belongsToMany(PostCategory::class, 'post_v_categories', 'post_id', 'category_id');
    }
    public function genres()
    {
        return $this->belongsToMany(PostGenre::class, 'post_v_genres', 'post_id', 'genre_id');
    }
    public function post_type()
    {
        return $this->belongsTo(PostType::class, 'type_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    function viewer()
    {
        return $this->belongsToMany(User::class, 'view_posts', 'post_id', 'user_id');
    }
    function pivotView()
    {
        return $this->hasMany(ViewPost::class, 'post_id');
    }

    function getTotalViewAttribute()
    {
        return $this->hasMany(ViewPost::class, 'post_id')->count();
    }

    function getReportView($month)
    {
        return \DB::select(\DB::raw("
            WITH viewer AS (
                SELECT vp.post_id,vp.user_id,
                        CONCAT(cr.class,' ',mj.major) AS major_class,
                        CONCAT(cr.class,' ',mj.short) AS major_class_short,vp.created_at
                FROM view_posts vp 
                    LEFT JOIN users u ON u.id=vp.user_id
                        LEFT JOIN user_details ud ON ud.user_id=u.id
                            LEFT JOIN class_rooms cr ON cr.id=ud.class_room_id 
                            LEFT JOIN majors mj ON mj.id=ud.major_id
            )
            SELECT v.*,(count(*)) AS count_read 
                FROM viewer v WHERE MONTH(v.created_at)=$month 
                GROUP BY major_class ORDER BY major_class 
        "));
    }
    function getReportCreate($month)
    {
        return \DB::select(\DB::raw("
            WITH post AS (
                SELECT p.*
                FROM post_types pt
                INNER JOIN posts p ON p.type_id=pt.id
                WHERE pt.type='paper'
            ),
            total_post AS (
                SELECT CONCAT(cr.class,' ',mj.major) AS major_class,
                        concat(cr.class,' ',mj.short) AS major_class_short,ps.created_at
                FROM post ps 
                    LEFT JOIN users u ON u.id=ps.user_id
                        LEFT JOIN user_details ud ON ud.user_id=u.id
                            LEFT JOIN class_rooms cr ON cr.id=ud.class_room_id 
                            LEFT JOIN majors mj ON mj.id=ud.major_id
            )
            SELECT v.*,count(*) AS total 
                FROM total_post v 
                WHERE MONTH(v.created_at)=$month
                GROUP BY major_class ORDER BY major_class 
        "));
    }
}