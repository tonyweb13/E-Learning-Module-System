<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_books', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->tinyInteger('downloadable');
            $table->string('title');
            $table->longText('description');
            $table->longText('cover_image');
            $table->string('file');
            $table->timestamp('date_created')->useCurrent();
            $table->timestamp('date_updated')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
            $table->tinyInteger('is_deleted');
        });
    }

    public function down()
    {
        Schema::dropIfExists('work_books');
    }
}
