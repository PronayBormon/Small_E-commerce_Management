<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shop_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shop_id')->constrained('shops')->cascadeOnDelete();
            $table->foreignId('catalog_product_id')->constrained('catalog_products')->restrictOnDelete();
            
            // Overrides (nullable values fall back to catalog_products)
            $table->string('custom_title')->nullable();
            $table->text('custom_description')->nullable();
            $table->decimal('price', 12, 2);
            $table->string('custom_thumbnail_url', 1024)->nullable();
            
            $table->unsignedInteger('stock_quantity')->default(0);
            $table->boolean('is_visible')->default(true);
            $table->timestamps();

            $table->unique(['shop_id', 'catalog_product_id']);
            $table->index(['shop_id', 'is_visible']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_products');
    }
};
