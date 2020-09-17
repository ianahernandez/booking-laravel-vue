<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $with = ['type'];

    protected $fillable = [
        'client_name','checkin','checkout', 'type_id'
    ];

    public function type()
    {
        return $this->belongsTo('App\Models\TypeRoom','type_id');
    }
    
}
