<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use Rebing\GraphQL\Support\Facades\GraphQL;

class LoginResponseType extends GraphQLType
{
    protected $attributes = [
        'name' => 'LoginResponse',
        'description' => 'Response from login mutation',
    ];

    public function fields(): array
    {
        return [
            'token' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The access token',
            ],
            'user' => [
                'type' => GraphQL::type('User'), 
                'description' => 'Authenticated user info',
            ],
        ];
    }
}
