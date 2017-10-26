var app = "dashboard";
var linkerCount = storage.getData('userInfo').liveLinkerCount;


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
		this.initLayout();
	},
	initLayout : function(){
		$('.basic_infomation').addClass('action');
		if(linkerCount < 2){
			$('.basic_infomation .user_area .infomation_list .list_content .rank').text('브론즈');
		}else if(linkerCount < 4){
			$('.basic_infomation .user_area .infomation_list .list_content .rank').text('실버');
		}else{
			$('.basic_infomation .user_area .infomation_list .list_content .rank').text('골드');
		}
		$('.basic_infomation .user_area .infomation_list .list_content .number').text(linkerCount);
		if(linkerCount%2 == 0){
			$('.basic_infomation .user_area .linker_cash .number').text('10,000');
			$('.progress_percent .number').text(100);
		}else{
			$('.basic_infomation .user_area .linker_cash .number').text('5,000');
			$('.progress_percent .number').text(50);
		}

        var cloneData = "";
        cloneData += ' <li> '
        cloneData += ' <div class="image_box">'
        cloneData += '    <img src="http://image.auction.co.kr/itemimage/12/ed/26/12ed264b66.jpg" alt="" class="item_image" />'
        cloneData += '    <span class="sns_icon"><img src="http://cdn4.iconfinder.com/data/icons/miu-gloss-social/60/facebook-512.png" alt="페이스북 공유"></span>'
        cloneData += '    </div>'
        cloneData += '    <span class="date">2017.10.25 16:00:00</span>'
        cloneData += ' <p class="item_name">'
        cloneData += '    <span class="market">[지마켓]</span>'
        cloneData += '    <span class="item">해외 캐릭터 인형</span>'
        cloneData += '</p>'
        cloneData += '<div class="status_infomation">'
        cloneData += '    <span class="state">지급</span>'
        cloneData += '    <span class="cashback">5,000</span><span class="won">원</span>'
        cloneData += ' </div>'
        cloneData += '</li>' ;


       	console.log(cloneData)
        $('.linker_list').empty();
      	 for( var i=1; i <= parseInt(linkerCount) ; i++ ){
        	console.log("for");
            $('.linker_list').append(cloneData);

        }
	},
	moveTopSection : function(){
		setTimeout(function(){
			cashGageCustom.setGageBar();
		},500);

		if(linkerCount%2 == 0){
			setTimeout(function(){
				layerPopup("짝짝짝!!! <br>누적된 스마일캐시 <b>10000</b>원이<br>지급되었습니다");
			},2000);

		}
	}
}

var cashGageCustom = {
	setGageBar : function(){
		if(linkerCount%2 == 0){
			var checkValue = 50;
		}else{
			var checkValue = 25;
		}

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
		    finish = checkValue, // Finish (in %)
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
		      animate(circum * curr / 50 + start);
		    });
		  }
		}
		animate();
		this.priceAnimateFunc();
	},
	priceAnimateFunc : function(){
		var target = $('.progress_percent .number');
		var targetText = target.text();
		var targetNumber = Number(targetText.replace(/[^0-9]/g,''));
		Number.prototype.comma = function() {
		    var a = this.toString().split(".");
		    a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    return a.join(".")
		};
		$({val : 0}).animate({val : targetNumber},{
			duration : 600,
			step : function(){
				target.text(Math.floor(this.val));
			},
			complete : function(){
				target.text(Math.floor(this.val));
			}
		});
	}
}


$(function(){
	graphCustom.setGraph();
	dashboardLoad.init();
	$('.progress_percent .number');
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