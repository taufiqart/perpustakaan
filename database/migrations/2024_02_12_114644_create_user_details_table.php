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
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id");
            $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade")->onUpdate("cascade");
            $table->text("avatar");
            $table->text("address");
            $table->text("full_name");
            $table->string("phone_number")->nullable();
            $table->string("identity")->nullable();
            $table->unsignedBigInteger("identity_type_id")->nullable();
            $table->foreign("identity_type_id")->references("id")->on("identity_types")->onDelete('SET NULL')->onUpdate('cascade');
            $table->enum("gender",["male","female"]);
            $table->unsignedBigInteger("member_type_id")->nullable();
            $table->foreign("member_type_id")->references("id")->on("member_types")->onDelete('SET NULL')->onUpdate('cascade');
            $table->date("date_of_birth");
            $table->string("place_of_birth");
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
        Schema::dropIfExists('user_details');
    }
};
