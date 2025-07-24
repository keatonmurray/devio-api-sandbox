<?php

namespace App\GraphQL\Queries;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;
use Illuminate\Support\Facades\Auth;

class MeQuery extends Query
{
    protected $attributes = [
        'name' => 'me',
        'description' => 'Returns the currently authenticated user',
    ];

    public function type(): Type
    {
        return GraphQL::type('User');
    }

    public function resolve($root, $args)
    {
        return Auth::user(); 
    }

    public function middleware(array $args): array
    {
        return ['auth:sanctum']; 
    }
}
