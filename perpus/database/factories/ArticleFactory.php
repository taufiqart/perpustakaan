<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $title = join(' ', fake()->unique()->words(3));
        $slug = str_replace(' ', '-', $title);
        $slug = str_replace('!', '', $slug);
        $slug = str_replace('.', '', $slug);
        $slug = str_replace('?', '', $slug);

        return [
            'title' => $title,
            'slug' => $slug,
            'category_id' => random_int(1, 5),
            'content' => fake()->paragraph(),
        ];
    }
}
