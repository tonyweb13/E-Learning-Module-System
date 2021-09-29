<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Section;
use App\SectionSubject;
use App\Lesson;
use App\SubjectAssessment;
use App\SubmittedAssessment;

class SectionApplicationController extends Controller
{
    /*sections*/
    public function index(Request $request)
    {
        $val = json_decode($request->getContent(), true);
        $keyword= $val['keyword'] ?? null;
        $currentuser=  $val['uid'];
        //for student
        $results = Section::with([
                                  'grade',
                                  'sectionStudent'
                               ])
                          ->where(function($q) use($keyword) {
                                  $q->where('name', 'LIKE', '%'.$keyword.'%')
                                    ->orWhereHas('grade',function($q) use($keyword){
                                        $q->where('name','LIKE', '%'.$keyword.'%');
                                    });
                            })
                          ->whereHas('sectionStudent',function($q) use($currentuser){
                                $q->where('student_id',$currentuser);
                            })
                          ->where('status',1)
                          ->where('is_deleted',0) 
                          ->get();
        
        return json_encode(array('data'=>$results));
    }
    
    
    /*subject*/
    public function subjectIndex(Request $request){
        
        $val = json_decode($request->getContent(), true);
        $keyword= $val['keyword'] ?? null;
        $id=  $val['sectionid'];
        
        //for student
        $targetStat=[1];
        
        $results = SectionSubject::with([
                                'mySubject.createdSubject'
                                ])
                        ->whereHas('mySubject.createdSubject',function($q) use($keyword){
                               $q->where('name','LIKE', '%'.$keyword.'%');
                         })
                        ->where('section_id',$id)
                        ->whereIn('status',$targetStat)
                        ->where('is_deleted',0)
                        ->get();
        return json_encode(array('data'=>$results));
    }
    
    //lessons
    public function subjectLessons(Request $request){
        
        $val = json_decode($request->getContent(), true);
        $keyword= $val['keyword'] ?? null;
        $id=  $val['sectionsubjectid'];
        
        //for student
        $targetStat=[1];
        $subject=SectionSubject::where('id',$id)->first();
        $created_id=$subject->mySubject->createdSubject->id;   
        
        $results=Lesson::with([
                                'topic'=>function($q) use($targetStat){
                                        $q->where('is_deleted',0)
                                          ->whereIn('status',$targetStat);
                                    }
                              ])
                       ->where(function($q) use($keyword) {
                            $q->where('name', 'LIKE', '%'.$keyword.'%')
                              ->orWhereHas('topic',function($q) use($keyword){
                                    $q->where('name','LIKE', '%'.$keyword.'%');
                                });
                        })
                       ->where('created_subject_id',$created_id)
                       ->whereIn('status',$targetStat)
                       ->where('is_deleted',0)
                       ->get();
        
        return json_encode(array('data'=>$results));
    }
    
    public function subjectAssessments(Request $request){
        
        $val = json_decode($request->getContent(), true);
        
        $keyword= $val['keyword'] ?? null;
        $id=  $val['sectionsubjectid'];
        $currentuser=  $val['uid'];
        
        $results=SubjectAssessment::with([
                                            'assessmentStudent'=>function($s) use($currentuser){
                                                $s->where('student_id',$currentuser);
                                            }
                                         ])
                                  ->where(function($q) use($keyword) {
                                        $q->where('name', 'LIKE', '%'.$keyword.'%')
                                          ->orWhere('topic', 'LIKE', '%'.$keyword.'%')
                                          ->orWhere('mode', 'LIKE', '%'.$keyword.'%')
                                          ->orWhereHas('sectionSubjectScale',function($q) use($keyword){
                                                $q->where('name','LIKE', '%'.$keyword.'%');
                                            });
                                    })
                                  ->whereHas('assessmentStudent',function($q) use($currentuser){
                                            $q->where('student_id',$currentuser);
                                    })
                                  ->where('section_subject_id',$id)
                                  ->where('is_deleted',0)
                                  ->where('status',1)
                                  ->get();
        
        return json_encode(array('data'=>$results));
        
    }
    
    public function subjectSubmittedAssessment(Request $request){
        
        $val = json_decode($request->getContent(), true);
        
        $id=  $val['assessmentid'];
        $currentuser=  $val['uid'];
        
        $result=SubmittedAssessment::with([
                                            'question.questionType',
                                            'question.answer'
                                          ])
                                   ->where('subject_assessment_id',$id)
                                   ->where('added_by',$currentuser)
                                   ->orderby('id')
                                   ->get();
                                   
        $total=0;
        $over=0;
        foreach($result as $d){
            $total=$total + $d->apoint;
            $over=$over + $d->point;
        } 
                                   
        return json_encode(array('data'=>$result,'total'=>$total,'over'=>$over));
    }
    
    public function subjectAnswerAssessment(Request $request){
        
        $val = json_decode($request->getContent(), true);
        
        $id=  $val['assessmentid'];
        $currentuser=  $val['uid'];
        
        $result=SubjectAssessment::with([
                                            'assessmentQuestion'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'assessmentQuestion.question'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'assessmentQuestion.question.questionType',
                                            'assessmentQuestion.question.answer',
                                            'assessmentStudent'=>function($s) use($currentuser){
                                                $s->where('student_id',$currentuser);
                                            }
                                        ])
                                    ->whereHas('assessmentQuestion',function($q){
                                         $q->where('is_deleted',0)
                                           ->whereHas('question',function($q){
                                                 $q->where('is_deleted',0);
                                            });
                                    })
                                  ->where('id',$id)
                                  ->where('is_deleted',0)
                                  ->first();
        
        return json_encode(array('data'=>$result));
        
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        //
    }

 
    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
