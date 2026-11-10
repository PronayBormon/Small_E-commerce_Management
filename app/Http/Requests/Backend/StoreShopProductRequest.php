<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreShopProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'shop_id' => ['required', 'integer', 'exists:shops,id'],
            'catalog_product_id' => [
                'required',
                'integer',
                Rule::exists('catalog_products', 'id')->where('is_active', true),
                Rule::unique('shop_products', 'catalog_product_id')
                    ->where('shop_id', $this->input('shop_id')),
            ],
            'custom_title' => ['nullable', 'string', 'max:255'],
            'custom_description' => ['nullable', 'string'],
            'price' => ['required', 'numeric', 'min:0', 'decimal:0,2'],
            'custom_thumbnail' => ['nullable', 'image', 'mimes:jpeg,jpg,png,webp,gif', 'max:5120'],
            'stock_quantity' => ['required', 'integer', 'min:0'],
            'is_visible' => ['required', 'boolean'],
        ];
    }
}
