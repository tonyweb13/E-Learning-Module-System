<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivityLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activity_logs', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->integer('user_id');
            $table->enum('activity', ['login', 'logout','create','edit','delete','assign','unassign','share','unshare','publish','unpublish','check','answer','read']);
            $table->enum('module', ['user', 'ebook','textbook','myedge subject','myedge scorm','modules','message','payments','activation code','class','subject','lesson','topic','assessments']);
            $table->string('activity_id');
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
        Schema::dropIfExists('activity_logs');
    }
}
