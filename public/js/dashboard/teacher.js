$(document).ready(function() {
  checkStat();
  task();
});

function checkStat(){
    
    //for deleted stat
    stat=$('#usersta').val();
    if(stat == 1){//delete 
        showWarningAlert('Warning','Your account is deleted, Thank you');
         window.location.href = '/logout';
    }
    
    // status
    stat2=$('#usersta2').val();
    if(stat2 == 2){ // unverified user
        //show modal
        $('#spam-modal').modal({backdrop: 'static', keyboard: false});
        $("#spam-modal").modal("show");
    }

}

function logoutUser(){
    window.location.href = '/logout';
}

function resend(){
    
    $.ajax({
        type: "get",
        url: "/resend-token",
        data: null,
        dataType: 'JSON',
        success: function (res) {
            console.log(res);
            showSuccessAlert('Success', 'We already resend the link to verify the email. Thak you!');
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function task(){
    var chart = JSC.chart('task_graph', { 
    debug: false, 
    legend_visible: false, 
    yAxis: { 
        line_visible: false, 
        defaultTick_enabled: false
    }, 
    defaultSeries: { 
        type: 'gauge column roundcaps', 
        angle: { sweep: 360, start: -90 }, 
        defaultPoint_tooltip: 
          '<b>%seriesName</b> %yValue% of Goal', 
        shape: { 
          innerSize: '70%', 
          
           label: [
                    { 
                        text: '%value'+'%',
                        style: { fontSize: 30, color: '#696969' }, 
                        align: 'center', 
                        verticalAlign: 'middle'
                    },
                     { 
                          verticalAlign: 'top', 
                          align: 'center', 
                          text: '%title',
                          style: { 
                            fontWeight: 'bold', 
                            fontSize: 15, 
                            color: '#161616',
                            padding:'15',
                      } 
                    }
                    
               ] 
        } 
    }, 
    series: [ 
    
        { 
            color: '#3FDC00', 
            name: 'Completed Task', 
            attributes: { 
                icon: 'material/maps/directions-run', 
                value:85,
                fill: '#3FDC00',
                title:'COMPLETED TASKS',
                
            }, 
            points: [['val', 85]] 
        }, 
        { 
            color: '#3EBAE1', 
            name: 'Todo Task', 
            attributes: { 
                icon: 'material/maps/directions-bike', 
                value:15,
                fill: '#3EBAE1',
                title:'TASKS TO DO'
            }, 
            points: [['val', 15]] 
        } 
      ] 
    }); 
}

