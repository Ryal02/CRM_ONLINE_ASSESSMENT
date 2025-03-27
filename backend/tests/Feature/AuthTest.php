<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class AuthTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_user_can_login_with_valid_credentials(): void
    {
        // Create a test user with a unique email
        $user = User::factory()->create([
            'email' => 'test' . time() . '@example.com', // Unique email using timestamp
            'password' => bcrypt('password123'),
        ]);
        
        // Act as the user before making the request
        $this->actingAs($user, 'api'); // Specify the 'api' guard
        
        // Send a POST request to the login endpoint
        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'password123',
        ]);
        // Assert that the response is successful
        $response->assertStatus(200);
        
        // Assert that the response contains the token
        $response->assertJsonStructure(['token', 'user']);
    }
    

    public function test_user_cannot_login_with_invalid_credentials()
    {
        // Create a test user
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password123'),
        ]);
    
        // Send a POST request with incorrect credentials
        $response = $this->postJson('/api/login', [
            'email' => 'test@example.com',
            'password' => 'wrongpassword',
        ]);
    
        // Assert that the response status is 401 Unauthorized
        $response->assertStatus(401);
        
        // Assert the response contains the correct error message
        $response->assertJson([
            'message' => 'Invalid email or password',
        ]);
    }

    public function test_login_requires_email_and_password()
    {
        // Send an empty request to login
        $response = $this->postJson('/api/login', []);

        // Assert validation errors
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['email', 'password']);
    }
}
