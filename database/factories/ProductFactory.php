<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product' => $this->faker->words(2, true),
            'cost' => $this->faker->numberBetween(1000, 50000),
            'stripe_product_id' => 'prod_' . strtoupper($this->faker->bothify('????###')),
        ];
    }
}
