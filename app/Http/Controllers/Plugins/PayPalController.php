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
            'client_id' => 'required|string',
            'secret' => 'required|string',
            'mode' => 'required|in:sandbox,live',
            'api_endpoint_url' => 'required|string'
        ]);

        $existing = Paypal::all();

        $matchingRecord = $existing->first(function ($record) use ($data) {
            return decrypt($record->client_id) === $data['client_id'];
        });

        if ($matchingRecord) {
            $matchingRecord->update($data);
            return response()->json(['message' => 'Your configurations have been updated successfully!'], 200);
        } else {
            Paypal::create($data);
            return response()->json(['message' => 'Your configurations have been saved successfully!'], 201);
        }
    }
}
