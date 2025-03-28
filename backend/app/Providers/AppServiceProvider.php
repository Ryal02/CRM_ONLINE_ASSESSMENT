<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Customer;
use App\Observers\CustomerObserver;
use App\Services\ElasticSearchService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->singleton(ElasticSearchService::class, function ($app) {
            return new ElasticSearchService();
        });
    
        Customer::observe(CustomerObserver::class);
    }
}
