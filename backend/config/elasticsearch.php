<?php

return [
    'hosts' => [
        env('ELASTICSEARCH_HOST', 'https://elasticsearch:9200'),
    ],
    'auth' => [
        'username' => env('ELASTICSEARCH_USERNAME', 'elastic'),
        'password' => env('ELASTICSEARCH_PASSWORD', 'password'),
    ],
    'ssl_verification' => env('ELASTICSEARCH_SSL_VERIFICATION', false), // Use .env for flexibility

];