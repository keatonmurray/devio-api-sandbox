<?php

namespace App\Http\Controllers\Plugins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plugins\PayPal;

class PayPalController extends Controller
{
    public function savePayPalAPIUserCredentials(Request $request)
    {
        $data = $request->validate([
            'client_id' => 'required|string|max:255',
            'secret' => 'required|string|max:255',
            'mode' => 'required|in:sandbox,live',
        ]);

        Paypal::create($data);
        return response()->json(['message' => 'Configurations saved!'], 201);
    }
}
