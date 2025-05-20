<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function user(Request $request) {
        // Log the token separately for debugging
        \Log::info('Received Bearer Token:', ['token' => $request->bearerToken()]);
    
        $user = $request->user();
    
        if (!$user) {
            return response()->json([
                'error' => 'User not authenticated',
            ], 401);
        }
    
        return response()->json(['user' => $user]);
    }
}
