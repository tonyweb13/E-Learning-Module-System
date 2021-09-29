<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionSubjectScalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('section_subject_scales', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->longText('name');
            $table->decimal('weight',7,2);
            $table->integer('section_subject_id');
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
        Schema::dropIfExists('section_subject_scales');
    }
}
