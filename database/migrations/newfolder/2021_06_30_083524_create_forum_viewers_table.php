<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForumViewersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forum_viewers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->tinyInteger('like');
            $table->tinyInteger('heart');
            $table->longText('comment');
            $table->integer('user_id');
            $table->integer('forum_id');
            $table->tinyInteger('is_deleted');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forum_viewers');
    }
}
