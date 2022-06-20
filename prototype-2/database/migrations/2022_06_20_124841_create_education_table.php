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
        Schema::create('education', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("resumeId");
            $table->string("jobTitle");
            $table->string("state");
            $table->string("employer");
            $table->string("city");
            $table->string("startDate");
            $table->string("endDate");
            $table->string("description");
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
        Schema::dropIfExists('education');
    }
};
