<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->string('slug')->nullable();
            $table->integer('price');
            $table->integer('qty')->default(1);
            $table->string('leng');
            $table->string('width');
            $table->string('weight');
            $table->timestamps();

            $table->unsignedBigInteger('category_id');
            $table->index('category_id', 'product_category_idx');
            $table->foreign('category_id', 'product_category_fk')->on('categories')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}