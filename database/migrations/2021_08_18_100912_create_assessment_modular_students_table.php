<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAssessmentModularStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assessment_modular_students', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('subject_assessment_id');
            $table->integer('student_id')->nullable();
            $table->timestamp('date_created')->useCurrent();
            $table->timestamp('date_updated')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
            $table->integer('added_by')->nullable();
            $table->integer('updated_by')->nullable();
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
        Schema::dropIfExists('assessment_modular_students');
    }
}
