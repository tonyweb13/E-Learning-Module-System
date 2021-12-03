<?php

use App\Ebook;

Auth::routes(['verify' => true]);

Route::group(['middleware' => ['auth' ,'checksinglesession']],
    function () {

        Route::get('/testing', 'MainHomeController@testingonly');

        /*MainHomeController*/
        Route::get('/home', 'MainHomeController@index')->name('home');

        //sample view of ebook

        Route::get('/sample/ebook', 'MainHomeController@sampleEbook');

        //after user login

        Route::get('/homes', 'MainHomeController@indexs')->name('home');

        //verify account

        Route::get('/account/verify/{id}/{uid}', 'MainHomeController@verifyAccount');

        //import user

        Route::get('/users/import', 'MainHomeController@importUser');

        Route::post('/users/import/store', 'MainHomeController@importUserStore');

        //editor upload image

        Route::post('/upload/image', 'MainHomeController@uploadImage');

        //editor upload video or audio

        Route::post('/upload/video', 'MainHomeController@uploadVideo');

        //file

        Route::post('/upload/file', 'MainHomeController@uploadFile');

        //get institute

        Route::get('/users/get-institute', 'MainHomeController@getInstitute');

        Route::get('/self/users/get-institute', 'MainHomeController@getInstituteSelf');

        //get created user

        Route::post('/users/get/created/user', 'MainHomeController@getCreatedUser');

        //Grades

        Route::get('/get-grades', 'GradesController@getGrades');

        /*Module here*/

        //dashboard

        /*users*/

        //admin

        Route::resource('/users/admins', 'AdminUsersController');

        Route::get('/users/admins/edit/{id}', 'AdminUsersController@edit');

        Route::get('/users/admins/activity/{id}', 'AdminUsersController@activityLogs');

        Route::post('/users/admins/delete', 'AdminUsersController@delete');

        //institute

        Route::resource('/users/institutes', 'InstitutionalAdminUsersController');

        Route::get('/users/institutes/edit/{id}', 'InstitutionalAdminUsersController@edit');

        Route::get('/users/institutes/activity/{id}', 'InstitutionalAdminUsersController@activityLogs');

        Route::post('/users/institutes/delete', 'InstitutionalAdminUsersController@delete');

        //teacher

        Route::resource('/users/teachers', 'TeacherUsersController');

        Route::get('/users/teachers/edit/{id}', 'TeacherUsersController@edit');

        Route::get('/users/teachers/activity/{id}', 'TeacherUsersController@activityLogs');

        Route::post('/users/teachers/delete', 'TeacherUsersController@delete');

        //student

        Route::resource('/users/students', 'StudentUsersController');

        Route::get('/users/students/edit/{id}', 'StudentUsersController@edit');

        Route::get('/users/students/activity/{id}', 'StudentUsersController@activityLogs');

        Route::post('/users/students/delete', 'StudentUsersController@delete');

        /*subject*/

        Route::resource('/subjects', 'SubjectsController');

        Route::post('/subjects/editor', 'SubjectsController@editor');

        Route::get('/get-subjects', 'SubjectsController@getSubjects');

        Route::post('/subjects/assigned', 'SubjectsController@getAssignedSubjects');

        Route::get('/subjects/get/mysubjects', 'SubjectsController@getMySubjects');

        Route::get('/subjects/assigned/teacher/{id}', 'SubjectsController@assignedSubjectTeacher');

        Route::get('/subjects/assign/teacher/{id}', 'SubjectsController@assignSubjectTeacher');

        Route::post('/subjects/assign/users/store', 'SubjectsController@assignSubject');

        Route::post('/subjects/delete', 'SubjectsController@delete');

        Route::get('/subjects/edit/{id}', 'SubjectsController@edit');

        /*textbooks*/

        //workbooks

        Route::resource('/textbooks/workbooks', 'WorkBooksController');

        Route::get('/textbooks/workbooks/{id}', 'WorkBooksController@show');

        Route::get('/textbooks/workbooks/edit/{id}', 'WorkBooksController@edit');

        Route::post('/textbooks/workbooks/delete', 'WorkBooksController@delete');

        //techers guide

        Route::resource('/textbooks/teachersguides', 'TeachersGuideController');

        Route::get('/textbooks/teachersguides/{id}', 'TeachersGuideController@show');

        //guides

        Route::resource('/guides', 'GuidesController');

        Route::get('/guides/view/{id}', 'GuidesController@show');

        Route::get('/guides/edit/{id}', 'GuidesController@edit');

        Route::post('/guides/delete', 'GuidesController@delete');

        Route::get('/get-guides', 'GuidesController@getGuides');

        //ebooks

        Route::resource('/ebooks', 'EbooksController');

        Route::get('/ebooks/get/myebooks', 'EbooksController@myEbook');

        Route::get('/ebooks/get/products', 'EbooksController@EbookProduct');

        Route::get('/ebooks/edit/{id}', 'EbooksController@edit');

        Route::post('/ebooks/delete', 'EbooksController@delete');

        Route::get('/ebooks/assigned/teacher/{id}', 'EbooksController@assignedEbookTeacher');

        Route::get('/ebooks/assign/teacher/{id}', 'EbooksController@assignEbookTeacher');

        Route::post('/ebooks/assign/users/store', 'EbooksController@assignEbook');

        Route::post('/ebooks/unassign/users/store', 'EbooksController@unAssignEbook');

        Route::post('/get/view/tg', 'EbooksController@getTG');

        Route::post('/get/view/ebook', 'EbooksController@getSingleEbook');

        Route::get('/trylang', 'EbooksController@trialOnly');

        //address

        Route::post('/getcities', 'ApiZipcodesController@selectCityWhereProvince');

        Route::post('/getzipcodes', 'ApiZipcodesController@selectZipcodeWhereCity');

        // //assigned product

        // Route::post('/get-assigned-products','AssignedProductsController@getAssignedProducts');

        /*TEACHER*/

        //classes

        Route::resource('/sections', 'SectionsController');

        Route::get('/sections/view/{id}', 'SectionsController@show');

        Route::get('/sections/edit/{id}', 'SectionsController@edit');

        Route::post('/sections/delete/', 'SectionsController@delete');

        Route::post('/sections/status', 'SectionsController@status');

        Route::get('/sections/shared/{id}', 'SectionsController@shared');

        Route::get('/sections/share/{id}', 'SectionsController@share');

        Route::post('/sections/share/store', 'SectionsController@shareStore');

        Route::post('/sections/share/delete', 'SectionsController@shareRemove');

        //subject

        Route::get('/sections/subjects/{id}', 'SectionsController@subjectIndex');//browse

        Route::get('/sections/subjects/create/{id}', 'SectionsController@subjectCreate');//create

        Route::post('/sections/subjects/store', 'SectionsController@subjectStore');//store

        Route::get('/sections/subjects/edit/{section_id}/{id}', 'SectionsController@subjectEdit');

        Route::post('/sections/subjects/delete/', 'SectionsController@subjectDelete');

        Route::post('/sections/subjects/status', 'SectionsController@subjectStatus');

        //lesson

        Route::get('/sections/subjects/lessons/view/{section_id}/{subject_id}/{lessonid}','SectionsController@subjectLessons');//view

        Route::post('/sections/subjects/lessons/store', 'SectionsController@subjectLessonStore');

        Route::post('/sections/subjects/get-lesson', 'SectionsController@getSubjectLesson');

        Route::post('/sections/subjects/lessons/delete', 'SectionsController@subjectLessonDelete');

        Route::post('/sections/subjects/lessons/status', 'SectionsController@subjectLessonStatus');

        //topic

        Route::post('/sections/subjects/topic/store', 'SectionsController@lessonTopicStore');

        Route::post('/sections/subjects/lessons/topic/view', 'SectionsController@lessonTopicView');

        Route::post('/sections/subjects/lessons/topic/delete', 'SectionsController@lessonTopicDelete');

        Route::post('/sections/subjects/lessons/topic/status', 'SectionsController@lessonTopicStatus');

        //get my subject

        Route::post('/sections/get-subject', 'SectionsController@getSubject');

        //assessments

        Route::get('/sections/subjects/assessments/{sectionid}/{subjectid}/{assessment_id}', 'SectionsController@subjectAssessmentIndex');

        Route::get('/sections/subjects/assessments/students/{sectionid}/{subjectid}/{assessment_id}', 'SectionsController@subjectAssessmentIndexStudents');

        Route::get('/sections/subjects/assessment/create/{sectionid}/{subjectid}','SectionsController@subjectAssessmentCreate');

        Route::post('/get-sectiongradescale', 'SectionsController@getGradeScale');

        Route::post('/get-sectionassessmentscale', 'SectionsController@getAssessmentScale');

        Route::post('/sections/subjects/assessment/store', 'SectionsController@subjectAssessmentStore');

        Route::post('/sections/subjects/assessment/get-assessement', 'SectionsController@subjectGetAssessment');

        Route::post('/sections/subjects/assessment/delete', 'SectionsController@subjectAssessmentDelete');

        Route::post('/sections/subjects/assessment/status', 'SectionsController@subjectAssessmentStatus');

        Route::get('/sections/subjects/assessment/get-assessement/{sectionid}/{subjectid}/{id}','SectionsController@subjectGetAssessment2');

        Route::get('/sections/subjects/assessment/answer/{sectionid}/{subjectid}/{id}','SectionsController@subjectAnswerAssessment');

        Route::get('/sections/subjects/assessment/answer2/{sectionid}/{subjectid}/{id}','SectionsController@subjectAnswerAssessment2');

        Route::post('/sections/subjects/assessment/submit', 'SectionsController@subjectAssessmentSubmit');

        Route::get('/sections/subjects/assessment/get/submitted/assessement/{sectionid}/{subjectid}/{id}','SectionsController@subjectGetSubmittedAssessment');

        Route::get('/sections/subjects/assessment/view/submitted/assessement/{sectionid}/{subjectid}/{userid}/{id}','SectionsController@subjectViewSubmittedAssessment');

        Route::post('/sections/subjects/assessment/grade', 'SectionsController@subjectAssessmentGrade');

        //question

        Route::get('/get-question-type', 'SectionsController@getQuestionType');

        Route::post('/sections/subjects/assessment/question/store', 'SectionsController@assessmentQuestionStore');

        Route::get('/sections/subjects/assessments/question-bank/{sectionid}/{subjectid}/{assessmentid}/{userid}', 'SectionsController@getQuestionBank');

        Route::post('/sections/subjects/assessments/question-bank/store', 'SectionsController@assessmentQuestionBankStore');

        Route::post('/sections/subjects/assessment/question/delete', 'SectionsController@deleteQuestion');

        Route::post('/sections/subjects/assessment/question/get/question', 'SectionsController@getQuestion');

        //assign assessment

        Route::get('/sections/subjects/assessment/assigned/assessement/{sectionid}/{subjectid}/{assessmentid}', 'SectionsController@studentAssessment');//online

        Route::get('/sections/subjects/assessment/assigned/assessement/modular/{sectionid}/{subjectid}/{assessmentid}', 'SectionsController@studentModularAssessment');//odular

        Route::get('/sections/subjects/assessment/assign/assessement/{sectionid}/{subjectid}/{assessmentid}', 'SectionsController@assignAssessment');//online

        Route::get('/sections/subjects/assessment/assign/assessement/modular/{sectionid}/{subjectid}/{assessmentid}', 'SectionsController@assignModularAssessment');//odular

        Route::post('/sections/subjects/assessment/assign/assessement/store', 'SectionsController@assignAssessmentStore');//online

        Route::post('/sections/subjects/assessment/assign/assessement/modular/store', 'SectionsController@assignAssessmentModularStore');//modular

        Route::post('/sections/subjects/assessment/unassign/assessement/store', 'SectionsController@unassignAssessmentStore');//online

        Route::post('/sections/subjects/assessment/unassign/assessement/modular/store', 'SectionsController@unassignAssessmentModularStore');//modular

        //student

        Route::get('/sections/students/{id}', 'SectionsController@studentIndex');//online

        Route::get('/sections/students/modular/{id}', 'SectionsController@studentModularIndex');//modular

        Route::get('/sections/students/create/{id}', 'SectionsController@studentCreate');//online

        Route::get('/sections/students/modular/create/{id}', 'SectionsController@studentModularCreate');//modular

        Route::post('/sections/students/store', 'SectionsController@studentsStore');//online

        Route::post('/sections/students/unenroll/store', 'SectionsController@unenrollstudentsStore');//online unenroll

        Route::post('/sections/students/modular/store', 'SectionsController@studentsModularStore');//modular

        //records

        Route::get('/sections/records/{id}', 'SectionsController@recordIndex');

        Route::get('/sections/records/student/view/{id}', 'SectionsController@recordStudentView');

        Route::get('/sections/records/student/view2/{sectionid}', 'SectionsController@recordStudentView2');

        Route::get('sections/subjects/report/{sectionid}/{id}', 'SectionsController@recordSubject');

        Route::get('sections/subjects/report/export/{sectionid}/{id}', 'SectionsController@reportExport');

        Route::post('/sections/subjects/report/get-submitted-report', 'SectionsController@assessmentRecord');

        Route::post('/sections/subjects/report/edit-grade/store', 'SectionsController@editGradeStore');

        /*library*/

        Route::resource('/libraries', 'LibrariesController');

        /*My Account*/

        Route::get('/profile', 'MainHomeController@profile');

        Route::post('/profile/store', 'MainHomeController@profileStore');

        Route::post('/profile/changepassword', 'MainHomeController@changepassword');

        /*MESSAGE*/

        //chat

        Route::resource('/chats', 'ChatsController');

        //Route::get('/chats/index/{id}', 'ChatsController@index');

        Route::get('search/users', 'ChatsController@searchUser');

        Route::post('message/chat', 'ChatsController@sendMessage');

        //forums and announcements

        Route::resource('/forums', 'ForumsController');

        Route::post('/get-forum', 'ForumsController@getForum');

        Route::get('/forums/edit/{id}', 'ForumsController@edit');

        Route::post('/forums/like', 'ForumsController@likes');

        Route::post('/forums/unlike', 'ForumsController@unlikes');

        Route::post('/forums/heart', 'ForumsController@hearts');

        Route::post('/forums/unheart', 'ForumsController@unhearts');

        Route::post('/forums/comment', 'ForumsController@comments');

        Route::post('/forums/get-comment', 'ForumsController@getForumComment');

        Route::get('/forums/show/{id}', 'ForumsController@show');

        Route::post('/forums/delete', 'ForumsController@delete');

        //email

        Route::resource('/emails', 'EmailsController');

        Route::get('/get-users', 'EmailsController@getUsers');

        Route::post('/emails/inbox/delete', 'EmailsController@inboxDelete');

        Route::get('/sent-email', 'EmailsController@sentEmail');

        Route::get('/emails/show/{id}', 'EmailsController@show');

        Route::post('/emails/reply/store', 'EmailsController@replyStore');

        Route::post('/emails/sent/delete', 'EmailsController@sentDelete');

        //NOTIFICATION

        Route::get('/getnotifications/forum', 'ApiMessagesController@getNotifForum');

        Route::get('/getnotifications/email', 'ApiMessagesController@getNotifEmail');

        Route::get('/getnotifications/chat', 'ApiMessagesController@getNotifChat');

        Route::get('/getnotifications/emailchat', 'ApiMessagesController@getNotifEmailChat');

        //admin created subject

        Route::resource('/createdsubjects', 'CreatedSubjectsController');

        Route::get('/createdsubjects/view/{id}', 'CreatedSubjectsController@show');

        Route::get('/createdsubjects/edit/{id}', 'CreatedSubjectsController@edit');

        Route::post('/get/createdsubject/gradescale', 'CreatedSubjectsController@gradescale');

        //updating database

        Route::get('/sample', 'EbooksController@asas');

        Route::get('/updatebd', 'SectionsController@updateDatabase');

        /*updating database for symlink and ssl*/

        //ebook

        Route::get('/databaseedit', 'WorkBooksController@databaseEdit');

        //Activation Codes

        Route::resource('/activation','ActivationController');

        Route::get('/activation/{book_id}/add','ActivationController@add_book');

        Route::post('/activation/claim','ActivationController@claim_book');

        //test

        Route::get('/createfolder', 'MainHomeController@createMyDriveFolder');

        Route::get('/sampleexternal', 'MainHomeController@sampleexternal');

        Route::post('/test/save', 'MainHomeController@testsaveProfileModuleSample');

    });

//logout
Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

//login
Route::get('/', 'MainHomeController@index');

Route::get('/clear-cache', function() {
    Artisan::call('optimize:clear');
    Artisan::call('event:clear');
    Artisan::call('queue:flush');
    return "Clear Successfully";
});
