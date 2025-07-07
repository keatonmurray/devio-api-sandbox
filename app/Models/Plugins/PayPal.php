<?php

namespace App\Models\Plugins;

use Illuminate\Database\Eloquent\Model;

class PayPal extends Model
{
    protected $table = 'paypal_config';
    protected $fillable = [
        'id',
        'client_id',
        'secret',
        'mode'
    ];
}
