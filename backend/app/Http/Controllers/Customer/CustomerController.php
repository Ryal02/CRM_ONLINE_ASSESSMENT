<?php

namespace App\Http\Controllers\Customer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\ElasticSearchService;
use App\Services\CustomerService;
use App\Http\Requests\CustomerRequest;
use Illuminate\Http\JsonResponse;
use App\Models\Customer;

class CustomerController extends Controller
{
    protected $searchService;
    protected $customerService;

    public function __construct(ElasticSearchService $searchService, CustomerService $customerService)
    {
        $this->searchService = $searchService;
        $this->customerService = $customerService;
    }

    public function index(Request $request): JsonResponse
    {
        if ($request->has('search')) {
            $customers = $this->searchService->searchCustomers($request->search);
        } else {
            $customers = Customer::all();
        }
    
        return response()->json([
            'message' => 'Customers retrieved successfully.',
            'statusCode' => 200,
            'data' => $customers, // Ensure data is always inside 'data'
        ], 200);
    }

    public function store(CustomerRequest $request): JsonResponse
    {
        $customer = $this->customerService->storeCustomer($request->validated());

        return response()->json([
            'message' => $customer['message'],
            'statusCode' => $customer['statusCode'],
            'data' => $customer['data'],
        ], $customer['statusCode']);
    }

    public function show($id): JsonResponse {

        $customer = Customer::find($id);

        if(!$customer) {
            return response()->json([
                'message' => 'Customer not found!',
                'statusCode' => 404,
            ], 404);
        }
        return response()->json([
            'message' => 'Customer found',
            'statusCode' => 200,
            'data' => $customer,
        ]);
    }
    public function update(Request $request, $id): JsonResponse
    {
        $customer = $this->customerService->updateCustomer($request->all(), $id);

        return response()->json([
            'message' => $customer['message'],
            'statusCode' => $customer['statusCode'],
            'data' => $customer['data'],
        ], $customer['statusCode']);
    }

    public function destroy($id): JsonResponse {

        $deleted = $this->customerService->deleteCustomer($id);

        return response()->json([
            'message' => $deleted['message'],
            'statusCode' => $deleted['statusCode'],
        ], $deleted['statusCode']);
    }
}
