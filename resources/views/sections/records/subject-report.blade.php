<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'REPORT'])
    <body class="body-bg">
        @section('content')
            <h5>CLASS- {{$section->grade->name}} {{$section->name}}</h5>
            <br>
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
            
            <div class="col-md-12">
                <table class="table border rounded " border="2">
                    <tr>
                        <th style="background-color:#142d57;color:white;">Student Name</th>
                        @foreach($scales as $scale)
                            <th colspan="{{count($scale->subjectAssessment)}}" style="background-color:#142d57;color:white;">{{$scale->name ?? ''}} {{(int)$scale->weight ?? '0'}}%</th>
                        @endforeach
                        <th style="background-color:#142d57;color:white;" width="7%">Average</th>
                    </tr>
                    <tr>
                        <td></td>
                        @foreach($scales as $scale)
                            @if(count($scale->subjectAssessment) > 0)
                                @foreach($scale->subjectAssessment as $subAss)
                                    <td>{{$subAss->name ?? ''}}</td>
                                @endforeach
                            @else
                                <td></td>
                            @endif
                        @endforeach
                        <td></td>
                    </tr>
                    @foreach($results as $result) 
                        <?php $gwa=0; ?>
                        <?php $gtotal=0; ?>
                        <tr>
                            <td>
                                {{$result[0]->user->name ?? ''}}
                            </td>
                            @foreach($result[1] as  $value)
                                    @if(count($value) > 0)
                                        @foreach($value as  $val)
                                            @if($val[0])
                                                <td>
                                                    {{$val[0]->total_score2 ?? ''}}/{{$val[0]->over_score2 ?? ''}}
                                                    <i class="right {{$val[1]->icons ?? 'far fa-star'}}" style="color:{{$val[1]->colors ?? 'green'}};"></i>
                                                    <button type="button" value="{{$val[0]->subject_assessment_id ?? ''}}" uid="{{$val[0]->student_id ?? ''}}" onclick="editScore(this)" data-toggle="tooltip" title="Edit Score" class="action-btn btn" style="background-color: Transparent;">
                                                        <i class="fas fa-pencil-alt"></i>
                                                    </button>
                                                </td>
                                            @else
                                                <td style="color:red;">
                                                    INC
                                                </td>
                                            @endif
                                        @endforeach
                                    @else
                                    <td></td>
                                    @endif
                            @endforeach
                            <td style="font-weight:bold;">
                                {{$result[2] ?? '0'}} %
                                <i class="right {{$result[3]->icons ?? 'far fa-star'}}" style="color:{{$result[3]->colors ?? 'green'}};"></i>
                            </td>
                        </tr>
                    @endforeach
                </table>
            </div>
        @endsection
        @include('sections.records.score-edit-modal')
        @include('layouts.navbar', ['title' => 'CLASS- ' . $section->grade->name.' '. $section->name])
        @include('layouts.alert')
    </body>
    <script type="text/javascript" src="/js/sections/navbar.js"></script>
    <script type="text/javascript" src="/js/sections/records/report.js"></script>
    <script type="text/javascript" src="/js/sections/students/create.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
</html>