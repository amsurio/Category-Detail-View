<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function register(Request $request) {

        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('admin')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
            'status' => true
        ];

        return response($response, 201);
    }

    public function login(Request $request) {

        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if(!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Логин/Пароль',
                'status' => true
            ], 401);
        }

        $token = $user->createToken('admin')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
            'status' => true
        ];

        return response($response, 201);
    }

    public function logout() {

        auth()->user()->admin()->delete();

        return [
            'status' => true
        ];
    }
}
