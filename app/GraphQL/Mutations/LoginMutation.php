<?php

namespace App\GraphQL\Mutations;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class LoginMutation extends Mutation
{
    protected $attributes = [
        'name' => 'login',
    ];

    public function type(): Type
    {
        return GraphQL::type('LoginResponse');
    }

    public function args(): array
    {
        return [
            'email' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'password' => [
                'type' => Type::nonNull(Type::string()),
            ],
        ];
    }

    public function resolve($root, $args)
    {
        $user = User::where('email', $args['email'])->first();

        if (! $user || ! Hash::check($args['password'], $user->password)) {
            throw new \Exception('Invalid credentials');
        }

        $token = $user->createToken('graphql-token')->plainTextToken;

        return [
            'token' => $token,
            'user' => $user,
        ];
    }

}
