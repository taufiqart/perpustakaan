<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $with = ['major', 'class_room', 'identity_type', 'member_type'];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function identity_type()
    {
        return $this->belongsTo(IdentityType::class, 'identity_type_id');
    }
    public function member_type()
    {
        return $this->belongsTo(MemberType::class, 'member_type_id');
    }
    public function major()
    {
        return $this->belongsTo(Major::class, 'major_id');
    }
    public function class_room()
    {
        return $this->belongsTo(ClassRoom::class, 'class_room_id');
    }
}
