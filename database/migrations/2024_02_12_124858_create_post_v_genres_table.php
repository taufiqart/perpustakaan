<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_v_genres', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("post_id");
            $table->unsignedBigInteger("genre_id");
            $table->foreign("post_id")->references("id")->on("posts")->onDelete("cascade")->onUpdate("cascade");
            $table->foreign("genre_id")->references("id")->on("post_genres")->onDelete("cascade")->onUpdate("cascade");
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
        Schema::dropIfExists('post_v_genres');
    }
};
