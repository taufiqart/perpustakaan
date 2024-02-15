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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id")->nullable();
            $table->foreign("user_id")->references("id")->on("users")->onDelete("SET NULL")->onUpdate("cascade");
            $table->string("slug")->unique();
            $table->string("title");
            $table->text("poster")->nullable();
            $table->unsignedBigInteger("type_id")->nullable();
            $table->foreign("type_id")->references("id")->on("post_types")->onDelete("SET NULL")->onUpdate("cascade");
            $table->longText("content")->nullable();
            $table->boolean("publish")->default(true);
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
        Schema::dropIfExists('posts');
    }
};
