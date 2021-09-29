<?php
header("Access-Control-Allow-Origin: *");
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*Mobile Application*/

//checklogin
Route::post('/mobileapp-verify-account', 'MainApplicationController@verifyaccount');

//get sections/class
Route::post('/mobileapp-get-mysections', 'SectionApplicationController@index');

//get sectionsubjects
Route::post('/mobileapp-get-mysectionssubject', 'SectionApplicationController@subjectIndex');

//get subject lesson and topic
Route::post('/mobileapp-get-subjectlesson', 'SectionApplicationController@subjectLessons');

//get assessments under the subject
Route::post('/mobileapp-get-subjectassessments', 'SectionApplicationController@subjectAssessments');

//get submitted assessment
Route::post('/mobileapp-get-submittedassessment', 'SectionApplicationController@subjectSubmittedAssessment');

//get answer assessment
Route::post('/mobileapp-get-answerassessment', 'SectionApplicationController@subjectAnswerAssessment');

//product list
Route::post('/mobileapp-get-products', 'MainApplicationController@getProduct');

