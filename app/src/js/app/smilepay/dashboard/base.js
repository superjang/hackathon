var app = "dashboard";
var xline = ['오늘','2','3','4','5','6','7','8','9','10','11'];
var yline = ['50','20','30','40','50','60','70','30','20']
var graphCustom = {
	setGraph : function(){
		var options = {
			'legend':{
				names: xline
			},
			'dataset':{
				title:false, 
				values: yline,
				colorset: ['orange'],
				fields:false
			},
			'chartDiv' : 'graph',
			'chartType' : 'line',
			'leftOffsetValue': 40,
			'bottomOffsetValue': 20,
			'chartSize' : {width:360, height:200},
			'minValue' : 0,
			'maxValue' : 50,
			'increment' : 5
		};
		Nwagon.chart(options);
	}
}

var dashboardLoad = {
	init : function(){
		this.moveTopSection();
	},
	moveTopSection : function(){
		console.log(1);
		$('.basic_infomation').addClass('action');
	}
}

var cashGageCustom = {
	setGageBar : function(){
		// CANVAS
		var canvas = document.getElementById('bar'),
		    width = canvas.width,
		    height = canvas.height;

		// CANVAS PROPERTIES
		var ctx = canvas.getContext('2d');
		ctx.lineWidth = 9;
		ctx.strokeStyle = 'orange';

		// CANVAS MATHS
		var x = width / 2,
		    y = height / 2,
		    radius = 49,
		    circum = Math.PI * 2,
		    start = Math.PI / -2, // Start position (top)
		    finish = 77, // Finish (in %)
		    curr = 0; // Current position (in %)

		// CANVAS ANIMATION

		// Enables browser-decided smooth animation (60fps)
		var raf =
		    window.requestAnimationFrame ||
		    window.mozRequestAnimationFrame ||
		    window.webkitRequestAnimationFrame ||
		    window.msRequestAnimationFrame;
		window.requestAnimationFrame = raf;

		// Animate function
		function animate(draw_to) {
		  // Clear off the canvas
		  ctx.clearRect(0, 0, width, height);
		  // Start over
		  ctx.beginPath();
		  // arc(x, y, radius, startAngle, endAngle, anticlockwise)
		  // Re-draw from the very beginning each time so there isn't tiny line spaces between each section (the browser paint rendering will probably be smoother too)
		  ctx.arc(x, y, radius, start, draw_to, false);
		  // Draw
		  ctx.stroke();
		  // Increment percent
		  curr++;
		  // Animate until end
		  if (curr < finish + 1) {
		    // Recursive repeat this function until the end is reached
		    requestAnimationFrame(function () {
		      animate(circum * curr / 100 + start);
		    });
		  }
		}
		animate();
	}
}


$(function(){
	graphCustom.setGraph();
	dashboardLoad.init();
	$('.linker_infomation .linker_tab a').on('click',function(e){
		e.preventDefault();
		var idx = $(this).parent('li').index();
		if(!$(this).parent('li').hasClass('selected')){
			$('.linker_infomation .linker_tab li').removeClass('selected');
			$(this).parent().addClass('selected');
			$('.linker_infomation .tab_content > div').hide().eq(idx).show();
		}
	});
});