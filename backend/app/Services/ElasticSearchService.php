<?php

namespace App\Services;

use Elastic\Elasticsearch\ClientBuilder;

class ElasticSearchService
{
    protected $client;

    public function __construct()
    {
        $this->client = ClientBuilder::create()
            ->setHosts([env('ELASTICSEARCH_HOST', 'elasticsearch:9200')])
            ->setBasicAuthentication(env('ELASTICSEARCH_USER', 'elastic'), env('ELASTICSEARCH_PASSWORD', 'password'))
            ->setSSLVerification(false) // Disable SSL verification
            ->build();
    }

    // ✅ Indexing a customer record in Elasticsearch
    public function indexCustomer($customer)
    {
        $params = [
            'index' => 'customers',
            'id'    => $customer->id,
            'body'  => [
                'first_name'      => $customer->first_name,
                'last_name'       => $customer->last_name,
                'email'           => $customer->email,
            ]
        ];

        try {
            $response = $this->client->index($params);
            return $response;
        } catch (\Exception $e) {
            \Log::error('Elasticsearch index error: ' . $e->getMessage());
            return null;
        }
    }

    // ✅ Searching customers by name and email
    public function searchCustomers($searchTerm)
    {
        try {
            $params = [
                'index' => 'customers', // Your Elasticsearch index
                'body'  => [
                    'query' => [
                        'multi_match' => [
                            'query'  => $searchTerm,
                            'fields' => ['first_name^2', 'last_name^2', 'email', 'contact_number']
                        ]
                    ]
                ]
            ];
            
            $response = $this->client->search($params);
            
            // Extract search results
            $hits = $response['hits']['hits'];

            return array_map(function ($hit) {
                return $hit['_source']; // Return only the indexed customer data
            }, $hits);

        } catch (\Exception $e) {
            \Log::error('Elasticsearch search error: ' . $e->getMessage());
            return [];
        }
    }
}