<?php 

namespace App\GraphQL\Mutations;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;

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
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {

        return [
            'success' => true,
            'message' => 'Mocked response — PayPal connected',
        ];
    }
}
