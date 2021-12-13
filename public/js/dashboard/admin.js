$(document).ready(function() {
    checkStat();
    registerUser();
    sales();
    reader();
});

function checkStat(){
    
    //for deleted stat
    stat=$('#usersta').val();
    if(stat == 1){//delete 
        showWarningAlert('Warning','Your account is either deleted or un verified, Please verify you account or contct us!, Thank you');
         window.location.href = '/logout';
    }
    
}

function registerUser(){
  var chart = JSC.chart('register-user', { 
    debug: false, 
    palette: 'fiveColor31', 
    legend_position: 'inside top left', 
    defaultSeries: { 
     // type: 'area', 
      shape_opacity: 0.6, 
      defaultPoint_tooltip: 
        '%icon {%percentOfGroup:n1}% <b>%yValue</b>'
    }, 
    yAxis: { 
      scale_type: 'stacked', 
      //formatString: 'c'
    }, 
    xAxis: { 
      crosshair_enabled: true, 
      scale: { type: 'time' } 
    }, 
    // title_label_text: 'User Register For 2021', 
    series: [ 
      { 
        name: 'Admin', 
        points: [ 
          ['1/1/2021', 1], 
          ['1/16/2021',5], 
          ['2/1/2021', 0], 
          ['2/16/2021',0], 
          ['3/1/2021', 0], 
          ['3/16/2021',0] 
        ] 
      }, 
      { 
        name: 'QA', 
        points: [ 
          ['1/1/2021', 1], 
          ['1/16/2021',8], 
          ['2/1/2021', 3], 
          ['2/16/2021',4], 
          ['3/1/2021', 0], 
          ['3/16/2021',5]
        ] 
      },  
      { 
        name: 'Teacher', 
        points: [ 
          ['1/1/2021', 15], 
          ['1/16/2021', 40], 
          ['2/1/2021', 25], 
          ['2/16/2021',38], 
          ['3/1/2021', 35], 
          ['3/16/2021', 40] 
        ] 
      }, 
      { 
        name: 'Student', 
        points: [ 
          ['1/1/2021', 30], 
          ['1/16/2021', 80], 
          ['2/1/2021', 50], 
          ['2/16/2021',46], 
          ['3/1/2021', 70], 
          ['3/16/2021', 80]
        ] 
      }, 
      { 
        name: 'Parent', 
        points: [ 
          ['1/1/2021', 25], 
          ['1/16/2021', 70], 
          ['2/1/2021', 45], 
          ['2/16/2021',26], 
          ['3/1/2021', 50], 
          ['3/16/2021', 70]
        ] 
      },
      { 
        name: 'Institutional Admin', 
        points: [ 
          ['1/1/2021',8], 
          ['1/16/2021',47], 
          ['2/1/2021', 21], 
          ['2/16/2021',18], 
          ['3/1/2021', 24], 
          ['3/16/2021', 15] 
        ] 
      },
       
    ] 
  }); 
}

function sales(){
  var chart = JSC.chart('sales', { 
    debug: false, 
    type: 'column aqua', 
    title_label_text: 'Acme Tool Sales', 
    yAxis: { label_text: 'Units Sold' }, 
    xAxis_label_text: 'Quarter', 
    series: [ 
      { 
        name: 'Ebooks', 
        id: 's1', 
        points: [ 
          { x: 'Dec', y: 230 }, 
          { x: 'Jan', y: 240 }, 
          { x: 'Feb', y: 267 }, 
          { x: 'Mar', y: 238 } 
        ] 
      }, 
      { 
        name: 'Edge Subjects', 
        points: [ 
          { x: 'Dec', y: 325 }, 
          { x: 'Jan', y: 367 }, 
          { x: 'Feb', y: 382 }, 
          { x: 'Mar', y: 371 } 
        ] 
      }, 
    ] 
  }); 
}

function reader(){
  var chart = JSC.chart('reader', { 
    debug: false, 
    legend_visible: false, 
    defaultTooltip_enabled: false, 
    xAxis_spacingPercentage: 0.4, 
    yAxis: [ 
      { 
        id: 'ax1', 
        defaultTick: { 
          padding: 10, 
          enabled: false
        }, 
        customTicks: [350, 600, 700, 800, 850], 
        line: { 
          width: 10, 
    
          /*Defining the option will enable it.*/
          breaks: {}, 
    
          /*Palette is defined at series level with an ID referenced here.*/
          color: 'smartPalette:pal1'
        }, 
        scale_range: [350, 850] 
      }, 
      { 
        id: 'ax2', 
        scale_range: [0, 850], 
        defaultTick: { 
          padding: 10, 
          enabled: false
        }, 
        customTicks: [0, 300, 600, 700, 800, 850], 
        line: { 
          width: 10, 
          color: 'smartPalette:pal2'
        } 
      } 
    ], 
    defaultSeries: { 
      type: 'gauge column roundcaps', 
      shape: { 
        label: { 
          text: '%value', 
          align: 'center', 
          verticalAlign: 'middle'
        } 
      } 
    }, 
    series: [ 
      { 
        type: 'column roundcaps', 
        name: 'Ebook', 
        yAxis: 'ax1', 
        palette: { 
          id: 'pal1', 
          pointValue: '%yValue', 
          ranges: [ 
            { value: 350, color: '#FF5353' }, 
            { value: 600, color: '#FFD221' }, 
            { value: 700, color: '#77E6B4' }, 
            { value: [800, 850], color: '#21D683' } 
          ] 
        }, 
        shape_label: { style: { fontSize: 28 } }, 
        points: [['x', [350, 720]]] 
      }, 
      { 
        yAxis: 'ax2', 
        name: 'Temperatures', 
        palette: { 
          id: 'pal2', 
          pointValue: '{%yValue/850}', 
          colors: [ 
            '#ffffd9', 
            '#edf8b0', 
            '#c7e9b4', 
            '#7fcdbb', 
            '#41b6c3', 
            '#1d91c0', 
            '#225ea8', 
            '#253494', 
            '#081d58'
          ] 
        }, 
        shape_label: { 
          text: '%value', 
          style: { fontSize: 28 } 
        }, 
        points: [['x', 320]] 
      } 
    ] 
  }); 
}