<?php

namespace App\Observers;

use App\Models\Customer;
use App\Services\ElasticSearchService;

class CustomerObserver
{
    protected $elasticSearchService;

    public function __construct(ElasticSearchService $elasticSearchService)
    {
        $this->elasticSearchService = $elasticSearchService;
    }

    // 🚀 Index when a customer is created/updated
    public function saved(Customer $customer)
    {
        $this->elasticSearchService->indexCustomer($customer);
    }
}
