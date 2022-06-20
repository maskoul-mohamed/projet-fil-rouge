<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $fillable = [
        "jobTitle",
        "state",
        "employer",
        "city",
        "startDate",
        "endDate",
        "description",
        "resumeId"
    ];
    public function education(){
        return $this->belongsTo(Resume::class);
    }
}
