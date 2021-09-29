<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <!--
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous">

    @include('layouts.head', ['title' => 'MY SUBJECT'])
    <body class="body-bg">
        @section('content')
        <h5 class ="headline">Browse My Subject</h5>
        <div class="row space-title">
            <div class="col-6">
                <form class="input-group" action="/subjects" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search title/price/grade" value="{{$keyword}}">
                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-6">
                <a href="/subjects/create" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Subject">
                   New<i class="fa fa-plus"></i>
                </a>
            </div>
        </div>
        <div style="overflow: auto;" class="border">
            <table class="table">
                <tr class="geo-secondary">
                    <th width="25%">Image</th>
                    <th width="25%">Title</th>
                    <!--<th width="25%">Guide</th>-->
                    <th width="20%">Grade</th>
                    <!--<th width="15%">Price</th>-->
                    <th width="15%">Actions</th>
                </tr>
                
                <?php $x = 1; ?>
                @foreach($results as $key=> $result)
                
                
                    <tr>
                        <td>
                            <?php
                                $string = App::make('url')->to('/') . $result->cover ;
                                //$string2 = preg_replace('#[^/]*$#', '', $string) . 'imsmanifest.xml';
                                echo '<img alt="image" src="' . $string . '" style="width: 150px; height: auto;"/>';
                            ?>
                        </td> 
                        <td>{{ $results->firstItem() + $key }} {{$result->title ?? ''}}</td> 
                        <!--<td>{{$result->guide->title ?? ''}}</td>-->
                        <td>{{$result->grade->name ?? ''}}</td>
                        <!--<td>{{$result->price ?? ''}}</td>-->
                        <td>
                            <button type="button" class="action-btn btn geo-primary text-light mb-1" data-toggle="modal" data-target="#Subj{{$result->id}}">
                                <i class="fa fa-list"></i>
                            </button>
                            <!--remove this if get the 2 buttons out of if-->
                            @if(Auth::user()->userType->name == 'Admin')
                                <a href="/subjects/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Subject" class="action-btn btn btn-primary text-light mb-1">
                                    <i class="fa fa-edit"></i>
                                </a>
                                <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Subject" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                    <i class="fa fa-trash"></i>
                                </button>
                                <a href="/subjects/assigned/teacher/{{$result->id}}" data-toggle="tooltip" title="Assign Subject" class="action-btn btn text-light mb-1" style="background-color: #ff9955;">
                                    <i class="fa fa-user"></i>
                                </a>
        
                                <div class="modal fade" id="Subj{{$result->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">
                                                    {{$result->grade->name ?? ''}} - {{$result->title}} - {{$result->id}}
                                                </h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body" style="max-height: 500px; overflow-x: scroll;">
                                                <table style="width: 100%;">
                                                    <thead>
                                                        <tr>
                                                            <th>Lessown No.</th>
                                                            <th>Lesson Title</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="showLessons" class="lessonNo<?php echo $x; ?>">

                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="modal-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif
                        </td>
                    </tr>                            
                <?php $x++; ?>
                @endforeach  
            </table>
        </div>
        <br>
        <div id="page-nav">{{ $results->links() }}</div>
        <br><br>
    @endsection
    
    @include('layouts.navbar', ['title' => 'EDGE GUIDES'])
    @include('layouts.alert')
        
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/subjects/index.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        
	<script language="JavaScript">
            
        
        @php $xx = 1; @endphp
        
        @foreach($results as $key=> $result)

            var xhttp<?php echo $xx; ?> = new XMLHttpRequest();
            xhttp<?php echo $xx; ?>.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    myFunc<?php echo $xx; ?>(this);
                }
            };
        
            <?php
                $string = App::make('url')->to('/') . $result->file;
                $string2 = preg_replace('#[^/]*$#', '', $string) . 'imsmanifest.xml';
                echo $string2;
            ?>

            //XML file location
            xhttp<?php echo $xx; ?>.open("GET", "<?php echo $string2 ?>", true);
            xhttp<?php echo $xx; ?>.send();

            //list all contents derived from imsmanifest.xml
            function myFunc<?php echo $xx; ?>(xml) {

                var x, y, i, ii, xmlDoc, txt;
                xmlDoc = xml.responseXML;
                txt<?php echo $xx; ?> = "";
                x = xmlDoc.getElementsByTagName('item');
                y = xmlDoc.getElementsByTagName('resource');
                for (i = 0 ; i < x.length; i++) {
                    if (x[i].hasAttribute('identifierref')) {

                        var repTerm = x[i].getAttribute('identifier').replace('_item','');
                        var fileTerm = y[i-1].getElementsByTagName("file")[0].getAttribute('href');
                        var titleTerm = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;

                        
                        txt<?php echo $xx; ?> += '<tr><td>Lesson ' + i + '</td><td><a href="#" onclick="myFunction(this)" class="' + repTerm + '" scormtitle="{{$result->title ?? ''}}" location="' + "{{App::make('url')->to('/')}}{{$result->extract_file}}" +  '" location2="' + fileTerm + '" >' + titleTerm + '</a></td></tr>';
                    }
                    /*
                    else {
                        alert('Nothing found!')
                    }
                    */
                }
                $(".lessonNo<?php echo $xx; ?>").append(txt<?php echo $xx; ?>);
            }

            <?php $xx++; ?>

        @endforeach
        
        function myFunction(elem) {
			var SCOInstanceID = "{{Auth::user()->id}}";
			SCOwin = window.open("/subjects/get/mysubjects/player?LessonID=" + elem.className + "&subjectId={{$result->id}}&LocFile=" + elem.getAttribute('location') +  "&LocFile2=" + elem.getAttribute('location2') + "&scormTitle=" + elem.getAttribute('scormtitle') + "&SCOInstanceID="+SCOInstanceID,"SCOwin");
			SCOwin.focus();
        }
        
	</script>
        
        
    </body>
</html>