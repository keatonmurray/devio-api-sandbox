<?php

namespace App\GraphQL\Types;

use Rebing\GraphQL\Support\Type as GraphQLType;
use GraphQL\Type\Definition\Type;

class ConnectPaypalResponseType extends GraphQLType
{
    protected $attributes = [
        'name' => 'ConnectPaypalResponse',
    ];

    public function fields(): array
    {
        return [
            'success' => [
                'type' => Type::nonNull(Type::boolean()),
            ],
            'message' => [
                'type' => Type::string(),
            ],
        ];
    }
}
