<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
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
    public function experience(){
        return $this->belongsTo(Resume::class);
    }
}
