<?php 

namespace App\GraphQL\Mutations;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL;
use App\Http\Controllers\Plugins\PayPalController;

class ConnectPaypalMutation extends Mutation
{
    protected $attributes = [
        'name' => 'connectPaypal',
    ];

    public function type(): Type
    {
        return GraphQL::type('ConnectPaypalResponse');
    }

    public function args(): array
    {
        return [
            'clientId' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'clientSecret' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'mode' => [
                'type' => Type::nonNull(Type::string())
            ],
            'apiEndpointUrl' => Type::nonNull(Type::string())
        ];
    }

    public function resolve($root, $args)
    {
        $request = new \Illuminate\Http\Request();
        $request->replace([
            'client_id' => $args['clientId'],
            'secret' => $args['clientSecret'],
            'mode' => $args['mode'] ?? 'sandbox',
            'api_endpoint_url' => $args['apiEndpointUrl'],
        ]);

        $response = app(PayPalController::class)
            ->savePayPalAPIUserCredentials($request);

        return [
            'success' => $response->getStatusCode() === 201,
            'message' => json_decode($response->getContent())->message,
        ];
    }

}
