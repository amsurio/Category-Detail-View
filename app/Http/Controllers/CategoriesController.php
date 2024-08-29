<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{

    public function index()
    {

        $category = Categories::tree();

        return response()->json($category, 200);
    }

}