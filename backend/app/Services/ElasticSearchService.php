<?php

namespace App\Services;

use Elastic\Elasticsearch\ClientBuilder;

class ElasticSearchService
{
    protected $client;

    public function __construct()
    {
        $this->client = ClientBuilder::create()
            ->setHosts([env('ELASTICSEARCH_HOST', 'elasticsearch:9200')]) // Make sure the correct host is set
            ->setBasicAuthentication(env('ELASTICSEARCH_USER', 'elastic'), env('ELASTICSEARCH_PASSWORD', 'password'))  // Ensure authentication details are correct
            ->setSSLVerification(true) // Turn off SSL verification if using self-signed certificate
            ->build();
    }

    // Indexing a customer record in Elasticsearch
    public function indexCustomer($customer)
    {
        // Ensure the customer model has the correct attributes to index
        $params = [
            'index' => 'customers',  // The index name
            'id' => $customer->id,   // Use the customer id
            'body' => [
                'first_name' => $customer->first_name,
                'last_name' => $customer->last_name,
                'email' => $customer->email,
                'contact_number' => $customer->contact_number,
            ]
        ];

        try {
            $response = $this->client->index($params);
            return $response;
        } catch (\Exception $e) {
            \Log::error('Elasticsearch index error: ' . $e->getMessage());
        }
    }
}
