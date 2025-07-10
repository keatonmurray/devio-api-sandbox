<?php

namespace App\Models\Plugins;

use Illuminate\Database\Eloquent\Model;

class PayPal extends Model
{
    protected $table = 'paypal_config';

    protected $fillable = [
        'client_id',
        'secret',
        'mode',
        'api_endpoint_url'
    ];

    public function setClientIdAttribute($value)
    {
        $this->attributes['client_id'] = encrypt($value);
    }

    public function getClientIdAttribute($value)
    {
        return decrypt($value);
    }

    public function setSecretAttribute($value)
    {
        $this->attributes['secret'] = encrypt($value);
    }

    public function getSecretAttribute($value)
    {
        return decrypt($value);
    }

    public function setModeAttribute($value)
    {
        $this->attributes['mode'] = encrypt($value);
    }

    public function getModeAttribute($value)
    {
        return decrypt($value);
    }

    public function setApiEndpointUrlAttribute($value)
    {
        $this->attributes['api_endpoint_url'] = encrypt($value);
    }

    public function getApiEndpointUrlAttribute($value)
    {
        return decrypt($value);
    }
}
