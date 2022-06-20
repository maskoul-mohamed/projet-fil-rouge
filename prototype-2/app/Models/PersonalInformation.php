<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        "firstName",
        "lastName",
        "postTitle",
        "email",
        "phone",
        "address",
        "state",
        "city",
        "zip",
        "image",
        "resumeId"
    ];
    public function personalInformation(){
        return $this->belongsTo(Resume::class);
    }
}
