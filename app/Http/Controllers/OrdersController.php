<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use Validator;

class OrdersController extends Controller
{
    public function index(){

        return response()->json(Orders::get(), 200);
    }

    public function create(Request $request){

        $user = $request->email;
        $cart = $request->cart;

        foreach($cart as $item){
            Orders::create([
               'name' => $item['name'],
               'category' => $item['category']['title'],
               'qty' => $item['qty'],
               'price' => $item['price'],
               'email' => $user,
            ]);
        }

        return response()->json(Orders::get(), 201);

    }

}