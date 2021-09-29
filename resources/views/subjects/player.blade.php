<?php 

    $scormTitle = $_REQUEST['scormTitle'];
    $SCOInstanceID = $_REQUEST['SCOInstanceID'];
    $subjectId = $_REQUEST['subjectId'];
    $LessonID = $_REQUEST['LessonID'];
    $LocFile = substr_replace($_REQUEST['LocFile'],"shared/index.html",-10);
    $LocFileb = substr_replace($_REQUEST['LocFile'],"",-10);
    $LocFile2 = $_REQUEST['LocFile2']; 

?>

<html>
<head>
	<title><?php print $scormTitle; ?></title>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>              
    $(document).ready(function() {
        
        $('.reader').attr('src', "<?php print $LocFile; ?>?content=<?php print $LessonID; ?>");
        
        $('.reader').on('load', function() {
            let iframeCont = $('.reader').contents().find('iframe');
            $(iframeCont).attr('src', '<?php print $LocFileb; ?>/<?php print $LocFile2; ?>');
        });
        
    });
</script>   
<frameset frameborder="0" framespacing="0" border="0" rows="50,*" cols="*" onbeforeunload="API.LMSFinish('');" onunload="API.LMSFinish('');">
	<frame class="api_holder" src="./subject/api.php?SCOInstanceID=<?php print $SCOInstanceID; ?>" name="API_1484_11" style="visibility: hidden; margin-top: -50px;" noresize>
	<frame class="reader" src="" name="course">
</frameset>
</html>