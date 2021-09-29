<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('employee_id', 25)->nullable();
            $table->string('unit', 25)->nullable();
            $table->string('building', 25)->nullable();
            $table->string('block', 25)->nullable();
            $table->string('lot', 25)->nullable();
            $table->string('phase', 25)->nullable();
            $table->string('house_no', 25)->nullable();
            $table->string('street', 25)->nullable();
            $table->string('subdivision', 25)->nullable();
            $table->string('barangay', 25)->nullable();
            $table->integer('zipcode_id', false)->length(10);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
