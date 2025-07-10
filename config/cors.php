<?php

return [

    'paths' => ['api/*', 'graphql'],

    'allowed_methods' => ['*'],

   'allowed_origins' => [env('VITE_DEVIO_CLIENT', '*')],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], //set to a domain on production

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
