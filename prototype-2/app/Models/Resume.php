<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Resume extends Model
{
    use HasFactory;

    protected $table = 'resumes';

    protected $primaryKey = 'id';
    protected $fillable = [
        'userId',
        'templateName'
    ];

    public function resume()
    {
        return $this->belongsTo(User::class, "userId");
    }

    public function personalInformation()
    {
        return $this->hasMany(PersonalInformation::class,"resumeId");
    }

    
    public function education()
    {
        return $this->hasMany(Education::class,"resumeId");
    }
}