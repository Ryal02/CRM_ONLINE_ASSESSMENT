<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Customer;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CustomerFeatureTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function test_can_list_all_customers(): void
    {
        Customer::factory()->count(3)->create();

        $response = $this->getJson('/api/customers');
        // dd($response->json());
        $response->assertStatus(200)
                 ->assertJsonCount(3, 'data');
    }

    /** @test */
    public function test_can_store_a_new_customer(): void
    {
        $customerData = [
            'first_name' => 'Jane',
            'last_name' => 'Smith',
            'email' => 'jane@example.com',
            'contact_number' => '0987654321',
        ];

        $response = $this->postJson('/api/customers', $customerData);
        $response->assertStatus(200)
                 ->assertJson([
                     'message' => 'Successfully created a new customer.',
                     'statusCode' => 200,
                     'data' => [
                         'first_name' => 'Jane',
                         'last_name' => 'Smith',
                         'email' => 'jane@example.com',
                         'contact_number' => '0987654321',
                     ]
                 ]);

        $this->assertDatabaseHas('customers', $customerData);
    }

    /** @test */
    public function test_fails_to_store_customer_with_invalid_data(): void
    {
        $invalidData = [
            'first_name' => '',
            'last_name' => '',
            'email' => 'not-an-email',
        ];

        $response = $this->postJson('/api/customers', $invalidData);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['first_name', 'last_name', 'email']);
    }

    /** @test */
    public function test_can_update_a_customer(): void
    {
        $customer = Customer::factory()->create();

        $updatedData = [
            'first_name' => 'Updated',
            'last_name' => 'Name',
            'email' => 'updated@example.com',
            'contact_number' => '1112223333',
        ];

        $response = $this->putJson("/api/customers/{$customer->id}", $updatedData);

        $response->assertStatus(200)
                 ->assertJson([
                     'message' => 'Customer updated successfully.',
                     'statusCode' => 200,
                     'data' => [
                         'first_name' => 'Updated',
                         'last_name' => 'Name',
                         'email' => 'updated@example.com',
                     ]
                 ]);

        $this->assertDatabaseHas('customers', $updatedData);
    }

    /** @test */
    public function test_fails_to_update_customer_with_invalid_data(): void
    {
        $customer = Customer::factory()->create();

        $invalidData = [
            'first_name' => '',
            'email' => 'invalid-email',
        ];

        $response = $this->putJson("/api/customers/{$customer->id}", $invalidData);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['first_name', 'email']);
    }

    /** @test */
    public function test_can_delete_a_customer(): void
    {
        $customer = Customer::factory()->create();

        $response = $this->deleteJson("/api/customers/{$customer->id}");
        $response->assertStatus(200)
                 ->assertJson([
                     'message' => 'Customer deleted successfully.',
                     'statusCode' => 200
                 ]);
     
        $this->assertDatabaseMissing('customers', ['id' => $customer->id]);
    }
}
