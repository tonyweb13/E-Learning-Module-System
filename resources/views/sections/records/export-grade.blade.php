<table>
    <thead>
    <tr>
        <th style="background-color:#f5f906;">Student Name</th>
        @foreach($scales as $scale)

            <th colspan="{{count($scale->subjectAssessment)}}" style="background-color:#f5f906;">
            {{$scale->name ?? ''}} {{(int)$scale->weight ?? '0'}}%</th>

        @endforeach
        <th style="background-color:#f5f906;">Average</th>
    </tr>
    </thead>
    <tbody>
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
    </tbody>
</table>
