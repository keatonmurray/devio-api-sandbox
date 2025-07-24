<?php

use Illuminate\Support\Facades\Route;
use Rebing\GraphQL\GraphQLController;

Route::post('/graphql', [GraphQLController::class, 'query']);