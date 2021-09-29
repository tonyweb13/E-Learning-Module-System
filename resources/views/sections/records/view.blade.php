<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'CLASS'])
<body class="body-bg">
    @section('content')
        <div class="review-consult">
            <div class="container-reviews">
                @include('sections.navbar')
                <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                    <div id="admin-card" class="tab-pane fade show active">
                        <div class="col-md-12">
                            <h5>{{$result->user->name ?? ''}}</h5>
                            <br>
                            @foreach($subjects as $subject)
                                <div class="row">
                                    <div class="col-md-10"></div>
                                    <div class="2">
                                        @foreach($subject->sectionAssessmentScale as $a=> $icon)
                                            <a href="#" data-toggle="tooltip" title=" from {{(int) $icon->scale_from ?? ''}} to {{(int) $icon->scale_to ?? ''}}%">
                                                <i class="{{$icon->icons ?? ''}} fa-2x" style="color:{{$icon->colors ?? ''}}"></i>
                                                &nbsp; - {{$icon->details ?? ''}} / {{$icon->remarks ?? ''}}
                                            </a>
                                            <br>
                                        @endforeach
                                    </div>
                                </div>
                                <br>
                                <table class="table" style="background-color:white;" border="4">
                                    <tr style="background-color:#9575cd; color:white;">
                                        <th>{{$subject->mySubject->createdSubject->name ?? ''}} - Assessment Name</th>
                                        @foreach($subject->sectionSubjectScale as $scale)
                                            <th>
                                                {{$scale->name ?? ''}}
                                                ({{round($scale->weight,0)}} %)
                                            </th>
                                        @endforeach
                                        <th>Average</th>
                                    </tr>
                                    <tbody>
                                        @foreach($subject->sectionSubjectScale as $key=> $scale)
                                            @foreach($scale->subjectAssessment as $val)
                                                @if($val->teststat == 'Graded')
                                                    <tr>
                                                        <td>{{$val->name ?? ''}}</td>
                                                        @for($i=0 ; $i < (count($subject->sectionSubjectScale)) + 1; $i++)
                                                            @if($i == $key)
                                                                <td>
                                                                    {{$val->assessmentStudent[0]->total_score2 ?? ''}} / {{$val->assessmentStudent[0]->over_score2 ?? ''}}
                                                                    <?php  
                                                                        if($val->assessmentStudent[0]->over_score2 == 0){
                                                                            $div = 1;
                                                                        }else{
                                                                            $div = $val->assessmentStudent[0]->over_score2;
                                                                        }
                                                                        $master = ($val->assessmentStudent[0]->total_score2 / $div) * 100;
                                                                        $mcode= App\SectionAssessmentScale::where('section_subject_id',$val->section_subject_id)
                                                                                                          ->where('scale_from','<=',$master)
                                                                                                          ->where('scale_to','>=',$master)
                                                                                                          ->first(); 
                                                                    ?>
                                                                    
                                                                    <i class="right {{$mcode->icons ?? 'far fa-star'}}" style="color:{{$mcode->colors ?? 'green'}};"></i>
                                                                    <?php   
                                                                        $mcode= null; 
                                                                    ?>
                                                                </td>
                                                            @else
                                                                <td>-</td>
                                                            @endif
                                                        @endfor
                                                    </tr>
                                                @endif
                                            @endforeach
                                        @endforeach
                                        <tr>
                                            <td>Total</td>
                                                @foreach($subject->sectionSubjectScale as $key=> $scale)
                                                    <?php   
                                                        $ftotal = 0; 
                                                        $fover =  0; 
                                                    ?>
                                                    @foreach($scale->subjectAssessment as $val)
                                                        @if($val->teststat == 'Graded')
                                                            <?php 
                                                                $ftotal = $ftotal + $val->assessmentStudent[0]->total_score2; 
                                                                $fover =  $fover + $val->assessmentStudent[0]->over_score2; 
                                                                if($fover == 0){
                                                                    $div = 1;
                                                                }else{
                                                                    $div = $fover;
                                                                }
                                                                $master = ($ftotal / $div) * 100;
                                                            ?>
                                                        @endif
                                                    @endforeach
                                                    @if($fover > 0)
                                                        <td>
                                                            {{$ftotal}} / {{$fover}}
                                                            <?php   
                                                                $fcode= App\SectionAssessmentScale::where('section_subject_id',$val->section_subject_id)
                                                                                                  ->where('scale_from','<=',$master ?? 0)
                                                                                                  ->where('scale_to','>=',$master ?? 0)
                                                                                                  ->first(); 
                                                            ?>
                                                            
                                                            <i class="right {{$fcode->icons ?? 'far fa-star'}}" style="color:{{$fcode->colors ?? 'green'}};"></i>
                                                            <?php   
                                                                $fcode= null; 
                                                            ?>
                                                        </td>
                                                    @else
                                                        <td>-
                                                        </td>
                                                    @endif
                                                    
                                                @endforeach
                                            
                                            
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Average</td>
                                            <?php $gwa=0; ?>
                                            @foreach($subject->sectionSubjectScale as $key=> $scale)
                                                <?php   
                                                    $ftotal = 0; 
                                                    $fover =  0; 
                                                ?>
                                                @foreach($scale->subjectAssessment as $val)
                                                    @if($val->teststat == 'Graded')
                                                        <?php   
                                                            $ftotal = $ftotal + $val->assessmentStudent[0]->total_score2; 
                                                            $fover =  $fover + $val->assessmentStudent[0]->over_score2; 
                                                            if($fover == 0){
                                                                $div = 1;
                                                            }else{
                                                                $div = $fover;
                                                            }
                                                            $master = ($ftotal / $div) * 100;
                                                        ?>
                                                    @endif
                                                @endforeach
                                                <td>
                                                    @if($fover > 0)
                                                    {{
                                                        round(($ftotal / $fover) * $scale->weight,2)
                                                    }}%
                                                    <?php   
                                                        $fcode= App\SectionAssessmentScale::where('section_subject_id',$val->section_subject_id)
                                                                                          ->where('scale_from','<=',$master ?? 0)
                                                                                          ->where('scale_to','>=',$master ?? 0)
                                                                                          ->first(); 
                                                    ?>
                                                    
                                                    <i class="right {{$fcode->icons ?? 'far fa-star'}}" style="color:{{$fcode->colors ?? 'green'}};"></i>
                                                    <?php   
                                                        $fcode= null; 
                                                    ?>
                                                    <?php $gwa=$gwa + round(($ftotal / $fover) * $scale->weight,2); ?>
                                                    @else
                                                        0%
                                                    @endif
                                                </td>
                                            @endforeach
                                            <td>
                                                {{$gwa}}%
                                                <?php   
                                                    $fcode= App\SectionAssessmentScale::where('section_subject_id',$subject->section_subject_id)
                                                                                      ->where('scale_from','<=',$gwa ?? 0)
                                                                                      ->where('scale_to','>=',$gwa ?? 0)
                                                                                      ->first(); 
                                                ?>
                                                
                                                <i class="right {{$fcode->icons ?? 'far fa-star'}}" style="color:{{$fcode->colors ?? 'green'}};"></i>
                                                <?php   
                                                    $fcode= null; 
                                                ?>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br><br><br>
                                
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'CLASS- ' . $section->grade->name.' '. $section->name])
    @include('layouts.alert')
</body>
    <script type="text/javascript" src="/js/sections/navbar.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/zipcode.js"></script>

</html>