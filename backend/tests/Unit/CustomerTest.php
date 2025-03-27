<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Customer;
use App\Services\CustomerService;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CustomerTest extends TestCase
{
    use RefreshDatabase;

    protected CustomerService $customerService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->customerService = new CustomerService();
    }

    /** @test */
    public function test_can_create_a_customer(): void
    {
        $customerData = [
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john@example.com',
            'contact_number' => '1234567890'
        ];

        $customer = $this->customerService->storeCustomer($customerData);

        $this->assertDatabaseHas('customers', [
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john@example.com',
            'contact_number' => '1234567890',
        ]);
    }

    /** @test */
    public function test_can_update_a_customer(): void
    {
        $customer = Customer::factory()->create();

        $updatedData = [
            'first_name' => 'Updated',
            'last_name' => 'Name',
            'email' => 'updated@example.com',
            'contact_number' => '1112223333'
        ];

        $this->customerService->updateCustomer($updatedData, $customer->id);

        $this->assertDatabaseHas('customers', [
            'id' => $customer->id,
            'first_name' => 'Updated',
            'last_name' => 'Name',
            'email' => 'updated@example.com',
            'contact_number' => '1112223333',
        ]);
    }

    /** @test */
    public function test_can_delete_a_customer(): void
    {
        $customer = Customer::factory()->create();

        $this->customerService->deleteCustomer($customer->id);

        $this->assertDatabaseMissing('customers', ['id' => $customer->id]);
    }
}
