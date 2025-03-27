<?php

namespace App\Services;

use App\Models\Customer;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CustomerService
{
     /**
     * Handle storing or updating client details.
     *
     * @param array $client
     * @param string $reportId
     * @return array
     * @throws \Exception
     */
    public function searchCustomers($searchTerm)
    {
        try {
            $params = [
                'index' => 'customers',  // Name of the index to search
                'body'  => [
                    'query' => [
                        'multi_match' => [
                            'query' => $searchTerm,
                            'fields' => ['first_name^2', 'last_name^2', 'email', 'contact_number']
                        ]
                    ]
                ]
            ];
            $response = $this->client->search($params);
            return $response['hits']['hits']; // Return the search results
        } catch (\Exception $e) {
            \Log::error('Elasticsearch search error: ' . $e->getMessage());
            return [];
        }
    }

    public function storeCustomer(array $data): array
    {
        try {
            DB::beginTransaction();
            $customer = Customer::updateOrCreate($data);
            DB::commit();
            return [
                'success' => true,
                'statusCode' => 200,
                'data' => $customer,
                'message' => "Successfully created a new customer.",
            ];
        } catch (Exception $e) {
            DB::rollback();
            \Log::error("Error storing customer: " . $e->getMessage());
            return [
                'success' => false,
                'statusCode' => 500,
                'data' => null,
                'message' => "Unable to create customer.",
            ];
        }
    }
    public function updateCustomer(array $data, $id): array
    {
        try {
            DB::beginTransaction();

            $customer = Customer::findOrFail($id);
            $customer->update($data);

            DB::commit();
            return [
                'success' => true,
                'statusCode' => 200,
                'data' => $customer,
                'message' => "Customer updated successfully.",
            ];
        } catch (\Exception $e) {
            DB::rollback();
            Log::error("Error updating customer: " . $e->getMessage());

            return [
                'success' => false,
                'statusCode' => 500,
                'message' => "Unable to update customer.",
            ];
        }
    }

    public function deleteCustomer($id): array
    {
        try {
            $customer = Customer::find($id);

            if (!$customer) {
                return [
                    'success' => false,
                    'statusCode' => 404,
                    'message' => "Customer not found.",
                ];
            }

            $customer->delete();

            return [
                'success' => true,
                'statusCode' => 200,
                'message' => "Customer deleted successfully.",
            ];
        } catch (\Exception $e) {
            Log::error("Error deleting customer: " . $e->getMessage());

            return [
                'success' => false,
                'statusCode' => 500,
                'message' => "Unable to delete customer.",
            ];
        }
    }
}
