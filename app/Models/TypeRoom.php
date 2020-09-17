<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeRoom extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','bed_quantity','quantity'
    ];

    public function reservations()
    {
        return $this->hasMany('App\Reservation');
    }
}
