<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\RateLimiter;


class AuthController extends Controller
{
    /**
     * Handle login request and return an API token.
     */
    public function login(LoginRequest $request)
    {
        $email = $request->email;
    
        // Rate limiting: Allow 5 attempts per minute
        if (RateLimiter::tooManyAttempts("login:$email", 5)) {
            return response()->json(['message' => 'Too many login attempts. Try again later.'], 429);
        }
    
        // Attempt to authenticate the user
        $user = User::where('email', $request->email)->first();
    
        if (!$user || !Hash::check($request->password, $user->password)) {
            RateLimiter::hit("login:$email"); // Increment failed attempts
            return response()->json(['message' => 'Invalid email or password'], 401);
        }
    
        RateLimiter::clear("login:$email"); // Reset failed attempts on success
    
        // Authenticate the user by logging them in
        Auth::login($user);
    
        // Generate API token
        $token = $user->createToken('API Token')->plainTextToken;
    
        return response()->json([
            'token' => $token,
            'user' => $user,
            'message' => 'Login successful',
            'statusCode' => 200,
        ], 200);
    }
    
}
