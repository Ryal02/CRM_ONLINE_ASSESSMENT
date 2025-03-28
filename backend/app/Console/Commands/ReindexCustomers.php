<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Customer;
use App\Services\ElasticSearchService;

class ReindexCustomers extends Command
{
    protected $signature = 'customers:reindex';
    protected $description = 'Reindex all customers in Elasticsearch';
    protected $elasticSearchService;

    public function __construct(ElasticSearchService $elasticSearchService)
    {
        parent::__construct();
        $this->elasticSearchService = $elasticSearchService;
    }

    public function handle()
    {
        $this->info('Starting reindexing customers...');
        $customers = Customer::all();

        foreach ($customers as $customer) {
            $this->elasticSearchService->indexCustomer($customer);
        }

        $this->info('Customers reindexed successfully!');
    }
}
