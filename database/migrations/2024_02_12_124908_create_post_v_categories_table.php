<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_v_categories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("post_id");
            $table->unsignedBigInteger("category_id");
            $table->foreign("post_id")->references("id")->on("posts")->onDelete("cascade")->onUpdate("cascade");
            $table->foreign("category_id")->references("id")->on("post_categories")->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_v_categories');
    }
};
