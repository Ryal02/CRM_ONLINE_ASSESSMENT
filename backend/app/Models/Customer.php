<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Services\ElasticSearchService;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'contact_number',
    ];


    protected static function booted() {
        static::created(function ($customer) {
            (new ElasticSearchService())->indexCustomer($customer);
        });
    }
}
