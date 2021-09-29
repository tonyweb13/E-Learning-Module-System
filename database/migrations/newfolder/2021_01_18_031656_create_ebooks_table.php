<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEbooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ebooks', function (Blueprint $table) {
           
           $table->bigIncrements('id');
           $table->integer('subject_id');
           $table->string('ebook_title');
           $table->longText('description');
           $table->decimal('price',7,2);
           $table->longText('cover_image');
           $table->string('file');
           $table->string('sample_file');
           $table->timestamp('date_created')->useCurrent();
           $table->timestamp('date_updated')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
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
        Schema::dropIfExists('ebooks');
    }
}
