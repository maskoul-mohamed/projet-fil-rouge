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
        Schema::create('personal_information', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("resumeId");
            $table->string("firstName");
            $table->string("lastName");
            $table->string("postTitle");
            $table->string("email");
            $table->string("phone");
            $table->string("address");
            $table->string("state");
            $table->string("city");
            $table->string("zip");
            $table->string("image");
            $table->timestamps();
            $table->foreign("resumeId")
                ->references("id")
                ->on("resumes")
                ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personal_information');
    }
};
