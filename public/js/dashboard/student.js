$(document).ready(function() {
    checkStat();
//   subjectStat();
//   average();
});

function checkStat(){
    
    //for deleted stat
    stat=$('#usersta').val();
    if(stat == 1){//delete 
        showWarningAlert('Warning','Your account is either deleted or un verified, Please verify you account or contct us!, Thank you');
         window.location.href = '/logout';
    }
    
}

function subjectStat(){
	
	var chart = JSC.chart('subjectStat', { 
	  debug: true, 
	  defaultSeries_type: 'column', 
	 // title_label_text: 'World Populations', 
	  series: [ 
	    { 
	      palette: 'default', 
	      // defaultPoint_marker: { 
	      //   visible: true, 
	      //   size: 30 
	      // }, 
	      name: 'Top Country Populations', 
	      points: [ 
	        { 
	          name: 'Math', 
	          y: 98, 
	          //marker_type: 'url(images/us.png)'
	        }, 
	        { 
	          name: 'English', 
	          y: 82, 
	          //marker_type: 'url(images/ca.png)'
	        }, 
	        { 
	          name: 'Filipino', 
	          y: 87, 
	         //marker_type: 'url(images/mx.png)'
	        }, 
	        { 
	          name: 'Science', 
	          y: 95, 
	          //marker_type: 'url(images/uk.png)'
	        },
	        { 
	          name: 'Computer', 
	          y: 89, 
	          //marker_type: 'url(images/uk.png)'
	        }  
	      ] 
	    } 
	  ] 
	});  
}

function average(){

	var chart = JSC.chart('average', { 
	  debug: true, 
	  type: 'gauge', 
	  animation_duration: 1000, 
	  legend_visible: false, 
	  xAxis: { spacingPercentage: 0.25 }, 
	  yAxis: { 
	    defaultTick: { 
	      padding: -5, 
	      label_style_fontSize: '14px'
	    }, 
	    line: { 
	      width: 9, 
	      color: 'smartPalette', 
	      breaks_gap: 0.06 
	    }, 
	    scale_range: [0, 100] 
	  }, 
	  palette: { 
	    pointValue: '{%value/100}', 
	    colors: ['green', 'yellow', 'red'] 
	  }, 
	  defaultAnnotation: { 
	    position: 'inside bottom'
	  }, 
	  annotations: [ 
	    { 
	      id: 'anVal', 
	      label: { 
	        text: '0', 
	        style: { fontSize: 46 } 
	      } 
	    }, 
	    { 
	      label: { 
	        text: 'GPA', 
	        style: { fontSize: 25, color: '#696969' } 
	      } 
	    } 
	  ], 
	  defaultTooltip_enabled: false, 
	  defaultSeries: { 
	    angle: { sweep: 180 }, 
	    shape: { innerSize: '70%' } 
	  }, 
	  series: [ 
	    { 
	      type: 'column roundcaps', 
	      points: [{ id: '1', x: 'speed', y: 0 }] 
	    } 
	  ], 
	  toolbar_items: { 
	    // Stop: { 
	    //   type: 'option', 
	    //   icon_name: 'system/default/pause', 
	    //   margin: 10, 
	    //   boxVisible: true, 
	    //   label_text: 'Pause', 
	    //   events: { change: playPause }, 
	    //   states_select: { 
	    //     icon_name: 'system/default/play', 
	    //     label_text: 'Play'
	    //   } 
	    // } 
	  } 
	}); 
	var INTERVAL_ID; 
	  
	playPause(); 
	  
	function setGauge(max, y) { 
	  chart 
	    .series(0) 
	    .options({ 
	      points: [{ id: '1', x: 'speed', y: y }] 
	    }); 
	  chart 
	    .annotations('anVal') 
	    .options( 
	      { label_text: JSC.formatNumber(y, 'n1') }, 
	      { animation: false } 
	    ); 
	} 
	function playPause(val) { 
	  if (val) { 
	    clearInterval(INTERVAL_ID); 
	  } else { 
	    update(); 
	  } 
	} 
	function update() { 
		INTERVAL_ID = setInterval(function() { 
		  setGauge(100, 90.2); 
		}, 1000); 
	  // INTERVAL_ID = setInterval(function() { 
	  //   setGauge(100, Math.random() * 100); 
	  // }, 1000); 
	} 
}