<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionAssessmentScalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('section_assessment_scales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->longText('description');
            $table->decimal('scale_from',7,2);
            $table->decimal('scale_to',7,2);
            $table->longText('remarks');
            $table->integer('section_assessment_id');
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
        Schema::dropIfExists('section_assessment_scales');
    }
}
