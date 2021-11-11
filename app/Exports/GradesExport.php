<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use App\Section;
use App\SectionSubject;
use App\SectionSubjectScale;
use App\SectionStudent;
use App\AssessmentStudent;
use App\SectionAssessmentScale;

class GradesExport implements FromView
{
    use Exportable;

    public function __construct(string $section_id, string $id)
    {
        $this->section_id = $section_id;
        $this->id = $id;
    }

    public function view(): View
    {
        Set_time_limit(0);
        $section=Section::where('id',$this->section_id)->first();
        $subject=SectionSubject::with(['sectionAssessmentScale'])->where('id',$this->id)->first();

        //get subject scale
        $scales=SectionSubjectScale::with([ 'subjectAssessment'=>function($q){
                                                    $q->where('mode', 'graded');
                                                },
                                                'subjectAssessment.assessmentStudent.submittedAssessment'=>function($q){
                                                    $q->where('is_deleted',0);
                                                },
                                                'subjectAssessment.assessmentStudent.submittedReportAssessment'=>function($q){
                                                    $q->where('is_deleted',0);
                                                }
                                          ])
                                    ->where('section_subject_id',$this->id)
                                    ->where('is_deleted',0)
                                    ->orderBy('id')
                                    ->get();
        $students=SectionStudent::where('section_id',$this->section_id)->get();

        $results=[];
        $studresult=[];
        $assessmentresult=[];
        $stotal=0;
        $ototal =0;

        $gtotal=0;
        $average=0;
        foreach($students as $student){
            foreach($scales as $scale){
                foreach($scale->subjectAssessment as $assessment){

                    //get all submitted assessment
                    $score=AssessmentStudent::with([
                                                        'submittedAssessment'=>function($q){
                                                            $q->where('is_deleted',0);
                                                        },
                                                        'submittedReportAssessment'=>function($q){
                                                            $q->where('is_deleted',0);
                                                        },
                                                        'subjectAssessment'
                                                   ])
                                            ->where('subject_assessment_id',$assessment->id)
                                            ->where('student_id',$student->student_id)
                                            ->where('status','Graded')
                                            ->whereHas('submittedReportAssessment',function($q){
                                                $q->where('is_deleted', 0);
                                            })
                                            ->whereHas('submittedAssessment',function($q){
                                                $q->where('is_deleted', 0);
                                            })
                                            ->first();
                    //check mastery
                    $mastery=SectionAssessmentScale::where('section_subject_id',$this->id)
                                                  ->where('scale_from','<=',$score->mastery_score2 ?? 0)
                                                  ->where('scale_to','>=',$score->mastery_score2 ?? 0)
                                                  ->first();
                    //return $mastery;
                    $assessmentresult[]=array($score,$mastery);
                    if($score){
                        if($score->over_score2 > 0){
                            $stotal= $stotal + $score->total_score2;
                            $ototal= $ototal +$score->over_score2;
                        }
                    }
                }
                $studresult[]=$assessmentresult;
                $assessmentresult=[];
                if($ototal == 0){
                    $gtotal=($stotal/1) * $scale->weight;
                }else{
                    $gtotal=($stotal/$ototal) * $scale->weight;
                }
                $average = $average + $gtotal;
                $gtotal=0;
                $stotal=0;
                $ototal=0;
            }
            $finalmastery=SectionAssessmentScale::where('section_subject_id',$this->id)
                                                  ->where('scale_from','<=',$average ?? 0)
                                                  ->where('scale_to','>=',$average ?? 0)
                                                  ->first();
            $results[]=array($student,$studresult,round($average,2),$finalmastery);
            $studresult=[];
            $average=0;
        }

        return view('sections.records.export-grade',  [
            'scales' => $scales,
            'section' => $section,
            'results' => $results,
            'subject' => $subject,
            'students' => $students
        ]);
    }
}
